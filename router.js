'use strict';

const express = require('express');
const router = express.Router();

// ------ GLOBAL VARS

let currentPlayer;
let userScore = 0;
let appScore = 0;


// ------ ROUTES

router.get('/', renderHome);
router.get('/shoot', handleTurn);
router.get('/leaderboard', handleLeaderboard);


// ------ ROUTE HANDLERS

function renderHome(req, res) {
  
  res.status(200).send('Let\'s ROSHAMBO!');
  
}

function handleTurn(req, res) {

  const roshambo = ['rock', 'paper', 'scissors'];

  // deconstructing the req.query obj to grab the player name and play from the query params
  const { player_name, play } = req.query;

  currentPlayer = player_name;

  // randomizing the app's play
  let appPlay = roshambo[Math.floor(Math.random() * roshambo.length)];

  switch(play) {

  case 'rock':
    if (appPlay === 'rock'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'paper'){
      appScore++;
      res.status(200).send(`${player_name} loses this round`);
    } else {
      userScore++;
      res.status(200).send(`${player_name} wins this round`);
    }
    break;

  case 'paper':
    if (appPlay === 'paper'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'scissors'){
      appScore++;
      res.status(200).send(`${player_name} loses this round`);
    } else {
      userScore++;
      res.status(200).send(`${player_name} wins this round`);
    }
    break;

  case 'scissors':
    if (appPlay === 'scissors'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'rock'){
      appScore++;
      res.status(200).send(`${player_name} loses this round`);
    } else {
      userScore++;
      res.status(200).send(`${player_name} wins this round`);
    }
    break;
  
  default:
    res.status(404).send('Unknown play, please ro-sham-bo again.');
  }

  console.log('user score:   ', userScore);
  console.log('app score:  ', appScore);

}

function handleLeaderboard(req, res) {

  let leaderboard = [{
    name: currentPlayer,
    score: userScore,
  }, {
    name: 'Computer',
    score: appScore,
  }];

  console.log('leaderboard:   ', leaderboard);
  
  res.status(200).send('This will be the sorted list of high scores.');

}




module.exports = router;