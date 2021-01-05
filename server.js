'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router.js');
const errorHandler404 = require('./middleware/404.js');
const errorHandler500 = require('./middleware/500.js');

app.use(express.json());
app.use(router);
app.use('*', errorHandler404);
app.use(errorHandler500);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || 3001;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};

