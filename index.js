'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router.js');

const PORT = process.env.PORT;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});



