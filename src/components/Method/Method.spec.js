import React from 'react';
import { render } from 'react-testing-library';

import Method from './Method';
import SALE_TYPE from '../../constants/saleType';

describe('components: Method', () => {
  it('should display the cash icon', () => {
    const { getByTitle } = render(<Method type={SALE_TYPE.CASH} />);

    expect(getByTitle('Cash sale')).toBeTruthy();
  });

  it('should display the card icon', () => {
    const { getByTitle } = render(<Method type={SALE_TYPE.CARD} />);

    expect(getByTitle('Card sale')).toBeTruthy();
  });
});
