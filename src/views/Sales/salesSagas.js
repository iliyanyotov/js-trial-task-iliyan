import { call, put, takeEvery } from 'redux-saga/effects';

import getSales from './salesApi';
import {
  SALES_REQUEST,
  salesRequestPending,
  salesRequestSuccess,
  salesRequestFailed,
} from './salesActions';

function* fetchSales(params) {
  try {
    yield put(salesRequestPending());
    const data = yield call(getSales, params);
    yield put(salesRequestSuccess(data));
  } catch (error) {
    yield put(salesRequestFailed(error));
  }
}

export default function* watchSalesRequest() {
  yield takeEvery(SALES_REQUEST, fetchSales);
}
