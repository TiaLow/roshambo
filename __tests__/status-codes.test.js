'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

const errorHandler500 = require('../middleware/500.js')

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

describe('500 Error Handling', () => {

  let err = {message: '500 server error'};
  let req = {};
  let res = {
    status: jest.fn(),
    statusMessage: '',
    json: jest.fn(),
  };
  let next = jest.fn();

  it('should respond with a 500 on an internal server error', () => {
    errorHandler500(err, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  it('should respond with proper json', () => {
    errorHandler500(err, req, res, next);
    expect(res.json).toHaveBeenCalledWith( {error: {message: '500 server error'}});
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


