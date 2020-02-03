import React from 'react';
import { render } from 'react-testing-library';

import Pill from './Pill';
import SALE_STATE from '../../constants/saleState';

describe('components: Pill', () => {
  it('should display the passed children', () => {
    const children = 'Successful';
    const { getByTestId } = render(
      <Pill state={SALE_STATE.SUCCESSFUL}>{children}</Pill>
    );

    expect(getByTestId('pill-wrapper').textContent).toBe(children);
  });
});
