import request from 'supertest';

import app from '../index';

describe('Base routes', () => {
  it('should have a health endpoint', async (done) => {
    const res = await request(app).get('/api/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Application is running!');
    done();
  });

  it('should handle nonexistent routes', async (done) => {
    const endpoint = '/api/something';
    const res = await request(app).get(endpoint);

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe(`Missing API endpoint: ${endpoint}`);
    done();
  });
});
