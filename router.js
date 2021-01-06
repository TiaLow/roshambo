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

  const roshambo = ['rock', 'paper', 'scissors'];

  console.log('query params:  ', req.query);

  // deconstructing the req.query obj to grab the player name and play from the query params
  const { player_name, play } = req.query;

  let appPlay = roshambo[Math.floor(Math.random() * roshambo.length)];

  console.log('users play:  ', play);

  console.log('computers play:  ', appPlay);


  switch(play) {

  case 'rock':
    if (appPlay === 'rock'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'paper'){
      res.status(200).send(`${player_name} loses this round`);
    } else {
      res.status(200).send(`${player_name} wins this round`);
    }
    break;

  case 'paper':
    if (appPlay === 'paper'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'scissors'){
      res.status(200).send(`${player_name} loses this round`);
    } else {
      res.status(200).send(`${player_name} wins this round`);
    }
    break;

  case 'scissors':
    if (appPlay === 'scissors'){
      res.status(200).send(`${player_name} ties this round`);
    } else if (appPlay === 'rock'){
      res.status(200).send(`${player_name} loses this round`);
    } else {
      res.status(200).send(`${player_name} wins this round`);
    }
    break;
  }

  
}

function handleLeaderboard(req, res) {
  
  res.status(200).send('This will be the sorted list of high scores.');

}




module.exports = router;