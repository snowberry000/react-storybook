import React from 'react';
import { shallow } from 'enzyme';
import TokenTable from './TokenTable';

it('renders without crashing', () => {
  const tokenData = [
    { symbol: 'EOS', balance: '10.0000', allowed: true },
    { symbol: 'ZRX', balance: '1.00000', allowed: false },
    { symbol: 'EOS', balance: '5.00000', allowed: false },
    { symbol: 'EOS', balance: '8.00000', allowed: true },
  ];

  const quoteTokens = ['WETH']
  const baseTokens = ['ZRX', 'EOS']
  
  shallow(<TokenTable baseTokens={baseTokens} quoteTokens={quoteTokens} tokenData={tokenData} />);
});
