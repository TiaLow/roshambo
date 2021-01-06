'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

let randomizer = require('../playRandomizer.js');

describe('Game Rules', () => {

  it('should beat rock with paper', async () => {

    const addMock = jest.spyOn(randomizer, 'randomizer');
    addMock.mockImplementation(() => 'paper');
    const results = await mockRequest.get('/shoot?player_name=user&play=rock');
    expect(results.res.text).toBe('user loses this round');

    addMock.mockRestore();

    const newMock = jest.spyOn(randomizer, 'randomizer');
    newMock.mockImplementation(() => 'rock');
    const newResults = await mockRequest.get('/shoot?player_name=user&play=paper');
    expect(newResults.res.text).toBe('user wins this round');

  });

  it('should beat paper with scissors', async () => {

    const addMock = jest.spyOn(randomizer, 'randomizer');
    addMock.mockImplementation(() => 'scissors');
    const results = await mockRequest.get('/shoot?player_name=user&play=paper');
    expect(results.res.text).toBe('user loses this round');

    addMock.mockRestore();

    const newMock = jest.spyOn(randomizer, 'randomizer');
    newMock.mockImplementation(() => 'paper');
    const newResults = await mockRequest.get('/shoot?player_name=user&play=scissors');
    expect(newResults.res.text).toBe('user wins this round');

  });

  it('should beat scissors with rock', async () => {

    const addMock = jest.spyOn(randomizer, 'randomizer');
    addMock.mockImplementation(() => 'rock');
    const results = await mockRequest.get('/shoot?player_name=user&play=scissors');
    expect(results.res.text).toBe('user loses this round');

    addMock.mockRestore();

    const newMock = jest.spyOn(randomizer, 'randomizer');
    newMock.mockImplementation(() => 'scissors');
    const newResults = await mockRequest.get('/shoot?player_name=user&play=rock');
    expect(newResults.res.text).toBe('user wins this round');

  });

  it('should be a tie if user and app plays are the same', async () => {

    const addMock = jest.spyOn(randomizer, 'randomizer');
    addMock.mockImplementation(() => 'scissors');
    const results = await mockRequest.get('/shoot?player_name=user&play=scissors');
    expect(results.res.text).toBe('user ties this round');

  });


});
