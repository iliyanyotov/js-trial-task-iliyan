import request from 'supertest';

import app from '../index';
import MOCK_SALES from './mockSales';

describe('controllers: sales', () => {
  describe('GET: sales', () => {
    it('should return the first set by default [10 per page]', async (done) => {
      const res = await request(app).get('/api/sales');
      const expectedData = MOCK_SALES.slice(0, 10);

      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual(expectedData);
      expect(res.body.totalCount).toBe(expectedData.length);
      done();
    });

    it('should return the second page by default [10 per page]', async (done) => {
      const res = await request(app)
        .get('/api/sales')
        .query({ page: 2 });
      const expectedData = MOCK_SALES.slice(10, 20);

      expect(res.body.data).toEqual(expectedData);
      done();
    });

    it('should return the first page [15 per page]', async (done) => {
      const res = await request(app)
        .get('/api/sales')
        .query({ pageSize: 15 });
      const expectedData = MOCK_SALES.slice(0, 15);

      expect(res.body.data).toEqual(expectedData);
      done();
    });

    it('should return the second page [17 per page]', async (done) => {
      const res = await request(app)
        .get('/api/sales')
        .query({ page: 2, pageSize: 17 });
      const expectedData = MOCK_SALES.slice(17, 34);

      expect(res.body.data).toEqual(expectedData);
      done();
    });

    it('should return the sixth page [5 per page]', async (done) => {
      const res = await request(app)
        .get('/api/sales')
        .query({ page: 6, pageSize: 5 });
      const expectedData = MOCK_SALES.slice(25, 30);

      expect(res.body.data).toEqual(expectedData);
      done();
    });

    it('should return the twentieth page [2 per page]', async (done) => {
      const res = await request(app)
        .get('/api/sales')
        .query({ page: 20, pageSize: 2 });
      const expectedData = MOCK_SALES.slice(38, 40);

      expect(res.body.data).toEqual(expectedData);
      done();
    });
  });
});
