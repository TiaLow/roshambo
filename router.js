'use strict';

const express = require('express');
const router = express.Router();
require('dotenv').config();

const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

let randomizer = require ('./playRandomizer.js');

// ------ GLOBAL VARS

// let currentPlayer;
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
    // currentPlayer = player_name;

    // saving player name to database
    let sql = 'INSERT INTO leaderboard (name) VALUES ($1);';
    let safeValue = [player_name];
    client.query(sql, safeValue);

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

        let sql = 'UPDATE leaderboard SET score=$1 WHERE name=$2;';
        let safeValues = [userScore, player_name];
        client.query(sql, safeValues);

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

        let sql = 'UPDATE leaderboard SET score=$1 WHERE name=$2;';
        let safeValues = [userScore, player_name];
        client.query(sql, safeValues);

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

        let sql = 'UPDATE leaderboard SET score=$1 WHERE name=$2;';
        let safeValues = [userScore, player_name];
        client.query(sql, safeValues);

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

    let sql = 'SELECT * FROM leaderboard;';

    client.query(sql)
      .then(result => {

        let leaderboard = result.rows;

        leaderboard.sort((a,b) => (a.score > b.score) ? -1 : 1);

        res.status(200).json(leaderboard);
        
      });
      

    // let leaderboard = [{
    //   name: currentPlayer,
    //   score: userScore,
    // }, {
    //   name: 'Computer',
    //   score: appScore,
    // }];
  

  } catch (err) {

    console.log(err);

  }

}


module.exports = router;