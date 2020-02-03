import { combineReducers } from 'redux';

import salesReducer from './views/Sales/salesReducer';

export default combineReducers({
  sales: salesReducer,
});
