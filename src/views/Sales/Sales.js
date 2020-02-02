import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as Styles from './Sales.styled';
import List from '../../components/List/List';
import Pill from '../../components/Pill/Pill';
import Amount from '../../components/Amount/Amount';
import { salesRequest } from './salesActions';
import Loader from '../../components/Loader/Loader';
import Method from '../../components/Method/Method';
import styled from 'styled-components';

const C = styled.div`
  flex: 1 1 160px;
  margin: 0 10px;
`;

class Sales extends PureComponent {
  componentDidMount() {
    this.props.getSales();
  }

  renderRow(item) {
    const { date: timestamp, state, type, amount } = item;

    const date = new Date(timestamp);

    return [
      <C>{date.toLocaleDateString()}</C>,
      <C>
        <Pill state={state}>{state}</Pill>
      </C>,
      <C>
        <Amount value={amount} state={state} />
      </C>,
      <C>
        <Method type={type} />
      </C>,
    ];
  }

  renderError() {
    return (
      <Styles.Wrapper>
        <h3>Sales history</h3>
        <Styles.ErrorMessage>
          An error occurred while trying to fetch the sale transactions!
        </Styles.ErrorMessage>
      </Styles.Wrapper>
    );
  }

  render() {
    const { sales = {}, loading, error } = this.props;
    const { data = [] } = sales;

    if (error) return this.renderError();

    return (
      <Styles.Wrapper>
        <h3>Sales history</h3>
        {loading ? (
          <Loader />
        ) : (
          <List items={data} renderRow={this.renderRow} />
        )}
      </Styles.Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  sales: state.sales.data,
  loading: state.sales.loading,
  error: state.sales.error,
});

const mapDispatchToProps = (dispatch) => ({
  getSales: () => dispatch(salesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
