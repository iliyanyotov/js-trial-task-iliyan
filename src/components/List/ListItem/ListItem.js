import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ListItem.styled';

class ListItem extends PureComponent {
  render() {
    return <Styles.Wrapper>{this.props.children}</Styles.Wrapper>;
  }
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
