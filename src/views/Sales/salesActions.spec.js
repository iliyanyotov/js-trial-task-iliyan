import {
  salesRequestPending,
  salesRequestSuccess,
  SALES_REQUEST_PENDING,
  SALES_REQUEST_SUCCESS,
} from './salesActions';

describe('actions: sales', () => {
  it('should return the salesRequestPending action', () => {
    expect(salesRequestPending()).toEqual({
      type: SALES_REQUEST_PENDING,
    });
  });

  it('should return the salesRequestSuccess action', () => {
    const data = { foo: 'bar' };

    expect(salesRequestSuccess(data)).toEqual({
      type: SALES_REQUEST_SUCCESS,
      payload: {
        data,
      },
    });
  });

  // it('...etc')
});
