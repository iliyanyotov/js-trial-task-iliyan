export const SALES_REQUEST = 'sales/REQUEST';
export const SALES_REQUEST_PENDING = 'sales/REQUEST_PENDING';
export const SALES_REQUEST_SUCCESS = 'sales/REQUEST_SUCCESS';
export const SALES_REQUEST_FAILED = 'sales/REQUEST_FAILED';

export const salesRequest = (params) => ({
  type: SALES_REQUEST,
  payload: {
    params,
  },
});

export const salesRequestPending = () => ({
  type: SALES_REQUEST_PENDING,
});

export const salesRequestSuccess = (data) => ({
  type: SALES_REQUEST_SUCCESS,
  payload: data,
});

export const salesRequestFailed = (error) => ({
  type: SALES_REQUEST_FAILED,
  payload: {
    error,
  },
});
