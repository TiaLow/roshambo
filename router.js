'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
  response.send('Hello New World');
});

module.exports = router;