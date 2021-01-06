'use strict';

module.exports = () => {
  const roshambo = ['rock', 'paper', 'scissors'];

  const appPlay = roshambo[Math.floor(Math.random() * roshambo.length)];

  return appPlay;
};

