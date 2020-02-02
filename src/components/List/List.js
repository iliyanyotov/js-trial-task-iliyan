import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as Styles from './List.styled';
import ListRow from './ListRow/ListRow';

class List extends PureComponent {
  renderRow = (item) => {
    const { renderRow } = this.props;
    const { id } = item;

    return <ListRow key={id}>{renderRow(item)}</ListRow>;
  };

  render() {
    const { items } = this.props;

    return <Styles.Wrapper>{items.map(this.renderRow)}</Styles.Wrapper>;
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderRow: PropTypes.func.isRequired,
};

export default List;
