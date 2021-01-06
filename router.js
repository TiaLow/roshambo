'use strict';

const express = require('express');
const router = express.Router();

// ------ ROUTES

router.get('/', renderHome);
router.get('/shoot', renderTurn);
router.get('/leaderboard', renderLeaderboard);


// ------ ROUTE HANDLERS

function renderHome(req, res) {
  
  res.status(200).send('Let\'s ROSHAMBO!');
  
}

function renderTurn(req, res) {
  
  res.status(200).send('This player wins/loses/ties this round.');
  
}

function renderLeaderboard(req, res) {
  
  res.status(200).send('This will be the sorted list of high scores.');

}




module.exports = router;