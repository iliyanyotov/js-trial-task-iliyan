import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

export default async (params) => {
  const res = await axios.get('api/sales', params);

  return res.data;
};
