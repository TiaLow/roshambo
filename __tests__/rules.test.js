'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Game Rules', () => {

  it('should beat rock with paper', () => {

  });

  it('should beat paper with scissors', () => {

  });

  it('should beat scissors with rock', () => {

  });

  it('should be a tie if user and app plays are the same', () => {

  });


})