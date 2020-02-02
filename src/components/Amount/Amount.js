import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './Amount.styled';
import SALE_STATE from '../../constants/saleState';

class Amount extends PureComponent {
  render() {
    const { value, state, currency } = this.props;
    const isRefund = state === SALE_STATE.REFUNDED;

    return (
      <Styles.Wrapper type={state}>
        <span data-testid="amount-value">{isRefund ? `-${value}` : value}</span>
        <span data-testid="amount-currency">{currency}</span>
      </Styles.Wrapper>
    );
  }
}

Amount.propTypes = {
  value: PropTypes.string.isRequired,
  state: PropTypes.oneOf(Object.values(SALE_STATE)),
  currency: PropTypes.string,
};

Amount.defaultProps = {
  currency: '€',
};

export default Amount;
