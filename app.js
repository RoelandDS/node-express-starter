'use strict';
const Express = require('express');
const Config = require('./config/development');

var app = Express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world!');
});

app.listen(Config.port, () => {
  console.log('app running on port => ', Config.port);
});