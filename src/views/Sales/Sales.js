import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as Styles from './Sales.styled';
import List from '../../components/List/List';
import Pill from '../../components/Pill/Pill';
import Amount from '../../components/Amount/Amount';
import { salesRequest } from './salesActions';
import Loader from '../../components/Loader/Loader';
import Method from '../../components/Method/Method';
import Button from '../../components/Button/Button';

class Sales extends PureComponent {
  state = {
    page: 1,
  };

  componentDidMount() {
    this.props.getSales(this.state.page);
  }

  renderRow(item) {
    const { id, date: timestamp, state, type, amount } = item;
    const date = new Date(timestamp);

    return (
      <>
        <span key={`date-${id}`}>{date.toLocaleDateString()}</span>
        <Pill key={`state-${id}`} state={state}>
          {state}
        </Pill>
        <Amount key={`amount-${id}`} value={amount} state={state} />
        <Method key={`method-${id}`} type={type} />
      </>
    );
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

  handleLoadMore = () => {
    this.setState(
      (state) => ({
        page: state.page + 1,
      }),
      () => {
        this.props.getSales({
          page: this.state.page,
        });
      }
    );
  };

  render() {
    const { data, loading, error } = this.props;

    if (error) return this.renderError();

    return (
      <Styles.Wrapper>
        <h3>Sales history</h3>
        {loading ? (
          <Loader />
        ) : (
          <>
            <List items={data} renderRow={this.renderRow} />
            <Styles.ButtonWrapper>
              <Button onClick={this.handleLoadMore}>Load more</Button>
            </Styles.ButtonWrapper>
          </>
        )}
      </Styles.Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.sales.data,
  loading: state.sales.loading,
  error: state.sales.error,
});

const mapDispatchToProps = (dispatch) => ({
  getSales: (params) => dispatch(salesRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
