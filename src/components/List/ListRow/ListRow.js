import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ListRow.styled';

class ListRow extends PureComponent {
  render() {
    return <Styles.Wrapper>{this.props.children}</Styles.Wrapper>;
  }
}

ListRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListRow;
