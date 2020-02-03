import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './Button.styled';

class Button extends PureComponent {
  render() {
    const { children, onClick } = this.props;

    return (
      <Styles.Wrapper onClick={onClick} data-testid="button">
        {children}
      </Styles.Wrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
