'use strict';

let randomizerFunction = () => {

  const roshambo = ['rock', 'paper', 'scissors'];
  
  const appPlay = roshambo[Math.floor(Math.random() * roshambo.length)];
  
  return appPlay;

};

module.exports = {
  randomizer: randomizerFunction,
};

