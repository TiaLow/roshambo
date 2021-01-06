'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Game Rules', () => {

  it('should beat rock with paper', async () => {

    const results = await mockRequest.get('/shoot?player_name=null&play=paper');

    console.log('results:  ', results.res.text);

  });

  it.skip('should beat paper with scissors', () => {

  });

  it.skip('should beat scissors with rock', () => {

  });

  it.skip('should be a tie if user and app plays are the same', () => {

  });


});
