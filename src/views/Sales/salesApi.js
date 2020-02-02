import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

export default async (action = {}) => {
  const { payload: { params } = {} } = action;

  const res = await axios.get('api/sales', {
    params,
  });

  return res.data;
};
