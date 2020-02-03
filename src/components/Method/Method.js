import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';

import * as Styles from './Method.styles';
import SALE_TYPE from '../../constants/saleType';

class Method extends PureComponent {
  getIcon() {
    switch (this.props.type) {
      default:
      case SALE_TYPE.CASH:
        return <FaMoneyBillAlt title="Cash sale" />;
      case SALE_TYPE.CARD:
        return <FaCreditCard title="Card sale" />;
    }
  }

  render() {
    return <Styles.Wrapper>{this.getIcon()}</Styles.Wrapper>;
  }
}

Method.propTypes = {
  type: PropTypes.oneOf(Object.values(SALE_TYPE)).isRequired,
};

export default Method;
