import {
  SALES_REQUEST_PENDING,
  SALES_REQUEST_SUCCESS,
  SALES_REQUEST_FAILED,
} from './salesActions';

export const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SALES_REQUEST_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case SALES_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload.data],
        loading: false,
        error: false,
      };

    case SALES_REQUEST_FAILED:
      return {
        ...state,
        data: payload.error,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
