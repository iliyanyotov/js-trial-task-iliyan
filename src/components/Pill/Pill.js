import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './Pill.styled';
import SALE_STATE from '../../constants/saleState';

class Pill extends PureComponent {
  render() {
    const { children, state } = this.props;

    return (
      <Styles.Wrapper state={state} data-testid="pill-wrapper">
        {children}
      </Styles.Wrapper>
    );
  }
}

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.oneOf(Object.values(SALE_STATE)).isRequired,
};

export default Pill;
