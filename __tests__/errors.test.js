'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 Error Handling', () => {

  it('should respond with a 404 on an invalid route', () => {

    // test invalid endpoint, like '/invalid', here

  });

  it('should respond with a 404 on an invalid method', () => {

    // test invalid method, like POST on '/', here

  });


});

describe('500 Error Handling', () => {

  it('should respond with a 500 on an internal server error', () => {

    // need to stub a fake error here 

  });


});

describe('200 Happy Path Handling', () => {

  it('should respond with a 200 on a proper request to /shoot', () => {

    // test mockRequest to '/shoot'


  });

  it('should respond with a 200 on a proper request to /leaderboard', () => {

    // test mockRequest to '/leaderboard'


  });


});


