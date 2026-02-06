const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
  test('GET /health returns ok status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('POST /tasks returns 400 without title', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Title is required');
  });
});
