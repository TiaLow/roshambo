'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 Error Handling', () => {

  it('should respond with a 404 on an invalid route', async () => {
    const results = await mockRequest.get('/invalid');
    expect(results.status).toBe(404);
  });

  it('should respond with a 404 on an invalid method', async () => {
    const results = await mockRequest.post('/');
    expect(results.status).toBe(404);
  });


});

describe.skip('500 Error Handling', () => {

  it('should respond with a 500 on an internal server error', () => {

    // need to mock a fake server error here... how?? 

  });


});

describe('200 Happy Path Handling', () => {

  it('should respond with a 200 on a proper request to /shoot', async () => {
    const results = await mockRequest.get('/shoot?player_name=null&play=rock');
    expect(results.status).toBe(200);
  });

  it('should respond with a 200 on a proper request to /leaderboard', async () => {
    const results = await mockRequest.get('/leaderboard');
    expect(results.status).toBe(200);
  });


});


