var request = require('supertest');
var app = require('./app.js');

describe('Server', () => {
  describe('', () => {
    test('this is the actual test', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    })
  })
})