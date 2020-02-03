import React from 'react';
import { render } from 'react-testing-library';

import Amount from './Amount';
import SALE_STATE from '../../constants/saleState';

describe('components: Amount', () => {
  it('should display the passed value', () => {
    const value = '165.40';
    const { getByTestId } = render(<Amount value={value} />);

    expect(getByTestId('amount-value').textContent).toBe(value);
  });

  it('should display the passed value with negative sign', () => {
    const value = '165.40';
    const { getByTestId } = render(
      <Amount value={value} state={SALE_STATE.REFUNDED} />
    );

    expect(getByTestId('amount-value').textContent).toBe(`-${value}`);
  });

  it('should display the default currency', () => {
    const value = '165.40';
    const { getByTestId } = render(<Amount value={value} />);

    expect(getByTestId('amount-currency').textContent).toBe('€');
  });

  it('should display the passed-in currency', () => {
    const value = '165.40';
    const currency = '$';
    const { getByTestId } = render(
      <Amount value={value} currency={currency} />
    );

    expect(getByTestId('amount-currency').textContent).toBe(currency);
  });
});
