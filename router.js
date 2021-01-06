'use strict';

const express = require('express');
const router = express.Router();

// ------ GLOBAL VARS


// ------ ROUTES

router.get('/', renderHome);
router.get('/shoot', handleTurn);
router.get('/leaderboard', handleLeaderboard);


// ------ ROUTE HANDLERS

function renderHome(req, res) {
  
  res.status(200).send('Let\'s ROSHAMBO!');
  
}

function handleTurn(req, res) {

  console.log('query params:  ', req.query);

  // deconstructing the req.query obj to grab the player name and play from the query params
  const { player_name, play } = req.query;
  
  res.status(200).send(`${player_name} wins/loses/ties this round.`);
  
}

function handleLeaderboard(req, res) {
  
  res.status(200).send('This will be the sorted list of high scores.');

}




module.exports = router;