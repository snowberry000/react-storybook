// @flow
import { Contract, utils } from 'ethers';
import { getTransferTokensFormDomain, getTokenDomain } from '../domains';

import * as notificationActionCreators from '../actions/app'
import * as actionCreators from '../actions/transferTokensForm';

import type { EtherTxParams, TransferTokensTxParams } from '../../types/transferTokensForm';
import type { State, ThunkAction } from '../../types';
import type { RankedToken } from '../../types/tokens'

import { getSigner } from '../services/signer';
import { ERC20 } from '../../config/abis';
import { parseTransferEtherError, parseTransferTokensError } from '../../config/errors'

export default function sendEtherSelector(state: State) {
  let tokenDomain = getTokenDomain(state);
  let transferTokensFormDomain = getTransferTokensFormDomain(state);

  let eth = { symbol: 'ETH', address: '0x0', decimals: 18, rank: 0}
  let otherTokens = tokenDomain.rankedTokens()
  let tokens: Array<RankedToken> = [ eth ].concat(otherTokens)

  return {
    getState: () => transferTokensFormDomain.getState(),
    isLoading: () => transferTokensFormDomain.isLoading(),
    getStatus: () => transferTokensFormDomain.getStatus(),
    getStatusMessage: () => transferTokensFormDomain.getStatusMessage(),
    getGas: () => transferTokensFormDomain.getGas(),
    getGasPrice: () => transferTokensFormDomain.getGasPrice(),
    getHash: () => transferTokensFormDomain.getHash(),
    getReceipt: () => transferTokensFormDomain.getReceipt(),
    tokens: () => tokens,
  };
}

export const validateEtherTx = ({ amount, receiver, gas, gasPrice }: EtherTxParams): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner();

      let tx = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
        to: receiver,
        value: utils.parseEther(amount.toString()),
      };

      let estimatedGas = await signer.provider.estimateGas(tx);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));

    } catch (error) {
      console.log(error)
      let errorMessage = parseTransferEtherError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
    }
  };
};

export const sendEtherTx = ({ amount, receiver, gas, gasPrice }: EtherTxParams): ThunkAction => {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('wallet-page/send-ether-tx');

    try {
      let signer = getSigner();
      let rawTx = {
        gasLimit: parseFloat(gas) || 0,
        gasPrice: parseFloat(gasPrice) || 2 * 10e9,
        to: receiver,
        value: utils.parseEther(amount.toString()),
      };

      let { hash } = await signer.sendTransaction(rawTx);
      let tx = { type: 'Transferred Ether', hash, time: Date.now(), status: 'PENDING' }
      dispatch(actionCreators.sendTx(tx));

      let receipt = await signer.provider.waitForTransaction(tx.hash);

      if (receipt.status === 0) {
        let tx = { type: 'Transferred Ether', time: Date.now(), status: 'ERROR', hash, receipt }
        let message = 'Token transfer failed.'
        
        dispatch(actionCreators.revertTx(tx, message))
      } else {
        let tx = { type: 'Transferred Ether', time: Date.now(), status: 'CONFIRMED', hash, receipt }
        let message = 'Token transfer successful!'
        
        dispatch(actionCreators.confirmTx(tx, message))
      }

    } catch (error) {
      console.log(error)
      let errorMessage = parseTransferEtherError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
    }
  };
};

export const validateTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState, { mixpanel }) => {

    try {
      let { receiver, amount, tokenAddress } = params;
      let signer = getSigner();

      let token = new Contract(tokenAddress, ERC20, signer);
      let decimals = await token.decimals.call()
      let amountTokens = utils.parseUnits(amount, decimals)

      let estimatedGas = await token.estimate.transfer(receiver, amountTokens);
      estimatedGas = estimatedGas.toNumber();
      dispatch(actionCreators.validateTx('Transaction Valid', estimatedGas));

    } catch (error) {
      console.log(error)
      let errorMessage = parseTransferTokensError(error)
      dispatch(actionCreators.invalidateTx(errorMessage))
    }
  };
};

export const sendTransferTokensTx = (params: TransferTokensTxParams): ThunkAction => {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('wallet-page/send-transfer-tokens-tx');

    try {
      let { receiver, amount, gas, gasPrice, tokenAddress } = params;
      let signer = getSigner();
      let token = new Contract(tokenAddress, ERC20, signer);
      let decimals = await token.decimals.call()
      let amountTokens = utils.parseUnits(amount, decimals)
      let txOpts = { gasLimit: parseFloat(gas) || 0, gasPrice: parseFloat(gasPrice) || 2 * 10e9 };

      let { hash } = await token.transfer(receiver, amountTokens, txOpts);
      let tx = { type: 'Token Transfer', hash, time: Date.now(), status: 'PENDING' }
      dispatch(actionCreators.sendTx(tx));

      let receipt = await signer.provider.waitForTransaction(tx.hash);

      if (receipt.status === 0) {
        let tx = { type: 'Token Transfer', time: Date.now(), status: 'ERROR', hash, receipt }
        let message = 'Token transfer failed'
        dispatch(actionCreators.revertTx(tx, message))

      } else {
        let tx = { type: 'Token Transfer', time: Date.now(), status: 'CONFIRMED', hash, receipt }
        let message = 'Token transfer successful'
        dispatch(actionCreators.confirmTx(tx, message));
      }

    } catch (error) {
      console.log(error)
      let errorMessage = parseTransferTokensError(error)
      dispatch(actionCreators.txError('error', errorMessage))
    }
  };
};
