import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('api: sales', () => {
  it('should return the mocked data', async (done) => {
    const data = {
      data: [],
      totalCount: 0,
    };
    mock.onGet('/api/sales').reply(200, data);

    const res = await axios.get('/api/sales');
    expect(res.data).toEqual(data);
    done();
  });

  // it('should handle errors', () => {});
});
