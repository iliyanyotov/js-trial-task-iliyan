import salesReducer, { initialState } from './salesReducer';
import {
  salesRequestPending,
  salesRequestSuccess,
  salesRequestFailed,
} from './salesActions';

describe('reducers: sales', () => {
  it('should return the initial state', () => {
    expect(salesReducer()).toEqual(initialState);
  });

  it('should handle SALES_REQUEST_PENDING action', () => {
    const action = salesRequestPending();

    expect(salesReducer(undefined, action)).toEqual({
      data: undefined,
      loading: true,
      error: false,
    });
  });

  it('should handle SALES_REQUEST_SUCCESS action', () => {
    const data = { foo: 'bar' };
    const action = salesRequestSuccess(data);

    expect(salesReducer(undefined, action)).toEqual({
      data: data,
      loading: false,
      error: false,
    });
  });

  it('should handle multiple actions', () => {
    const error = { foo: 'bar' };
    const firstAction = salesRequestPending();
    const secondAction = salesRequestFailed(error);
    let state = salesReducer(undefined, firstAction);

    expect(state).toEqual({
      data: undefined,
      loading: true,
      error: false,
    });

    state = salesReducer(state, secondAction);

    expect(state).toEqual({
      data: error,
      loading: false,
      error: true,
    });
  });
});
