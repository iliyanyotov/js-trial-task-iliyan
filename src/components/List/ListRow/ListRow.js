import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ListRow.styled';
import ListItem from '../ListItem/ListItem';

class ListRow extends PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        {this.props.children.map((c) => (
          <ListItem>{c}</ListItem>
        ))}
      </Styles.Wrapper>
    );
  }
}

ListRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ListRow;
