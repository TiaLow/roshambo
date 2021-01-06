'use strict';

const express = require('express');
const router = express.Router();

let randomizer = require ('./playRandomizer.js');

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

  try {

    const welcomeMessage = 'Let\'s ROSHAMBO! Please make your play by typing \'/shoot?player_name=YOUR_NAME&play=YOUR_PLAY\' at the end of the URI above. Acceptable plays are \'rock\', \'paper\', or \'scissors\'. Type \'/leaderboard\' at any time to see current score. Ro-sham-bo-GO!';

    res.status(200).send(welcomeMessage);

  } catch(err) {

    console.log(err);

  }
  
}

function handleTurn(req, res) {
  
  try {
    
    // deconstructing the req.query obj to grab the player name and play from the query params
    const { player_name, play } = req.query;
    
    // assigning global var to use later in leaderboard
    currentPlayer = player_name;
  
    // getting the app's move from the randomizer module
    const appPlay = randomizer.randomizer();
  
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

  } catch(err) {

    console.log(err);

  }

}

function handleLeaderboard(req, res) {

  try {

    let leaderboard = [{
      name: currentPlayer,
      score: userScore,
    }, {
      name: 'Computer',
      score: appScore,
    }];
  
    leaderboard.sort((a,b) => (a.score > b.score) ? -1 : 1);
    
    res.status(200).json(leaderboard);

  } catch (err) {

    console.log(err);

  }

}


module.exports = router;