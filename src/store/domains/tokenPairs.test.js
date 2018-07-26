import getTokenPairsDomain, * as eventCreators from './tokenPairs';
import { quoteTokens } from '../../config/quotes';

//createInitialState is not an eventCreator. We simply import it in order to create a new
//create an initial state. The default initial state used in the application has to many
//tokens to be used for tests. Therefore we recreate an initial state with less tokens
//to test the token pair model
const createInitialState = eventCreators.createInitialState;

const symbols = ['ETH', 'EOS', 'WETH', 'ZRX'];
const tokensBySymbol = {
  ETH: { symbol: 'ETH', address: '0x0' },
  EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
};

const tokens = Object.values(tokensBySymbol);
const customInitialTokenPairState = createInitialState(quoteTokens, tokens);

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTokenPairsDomain(state);
}

it('handles initialized event properly', () => {
  const tokenPairsDomain = getDomain([eventCreators.initialized(customInitialTokenPairState)]);
  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI'];

  const expectedByPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };
  expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
  expect(tokenPairsDomain.getPairsBySymbol()).toEqual(expectedByPairsBySymbol);
});

it('handles tokenPairUpdated event properly', () => {
  const token = {
    symbol: 'REQ',
    address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
  };

  const tokenPairsDomain = getDomain([
    eventCreators.initialized(customInitialTokenPairState),
    eventCreators.tokenPairUpdated(token),
  ]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI', 'REQ_WETH', 'REQ_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    REQ_WETH: {
      pair: 'REQ_WETH',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    REQ_DAI: {
      pair: 'REQ_DAI',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
  expect(tokenPairsDomain.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});

it('handles tokenPairUpdated event properly if the event is already if the token is a quote token', () => {
  const token = {
    symbol: 'DAI',
    address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
  };

  const tokenPairsDomain = getDomain([
    eventCreators.initialized(customInitialTokenPairState),
    eventCreators.tokenPairUpdated(token),
  ]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
  expect(tokenPairsDomain.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});

it('handles tokenPairUpdated event properly', () => {
  const token1 = {
    symbol: 'REQ',
    address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
  };
  const token2 = {
    symbol: 'ZRX',
    address: '0xc73eec564e96e6653943d6d0e32121d455917653',
  };

  const tokenPairsDomain = getDomain([
    eventCreators.initialized(customInitialTokenPairState),
    eventCreators.tokenPairUpdated(token1),
    eventCreators.tokenPairRemoved(token2),
  ]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'REQ_WETH', 'REQ_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    REQ_WETH: {
      pair: 'REQ_WETH',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    REQ_DAI: {
      pair: 'REQ_DAI',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
  expect(tokenPairsDomain.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});
