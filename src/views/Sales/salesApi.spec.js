import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import getSales from './salesApi';

const mock = new MockAdapter(axios);

describe('api: sales', () => {
  it('should return the mocked data', async (done) => {
    const serverData = {
      data: [],
      totalCount: 0,
    };
    mock.onGet('/api/sales').reply(200, serverData);

    const res = await getSales();
    expect(res.data).toEqual(serverData.data);
    done();
  });

  // it('should handle errors', () => {});
});
