'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router.js');
const errorHandler404 = require('./middleware/404.js');
const errorHandler500 = require('./middleware/500.js');

const PORT = process.env.PORT;

app.use(express.json());
app.use(router);
app.use('*', errorHandler404);
app.use(errorHandler500);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});



