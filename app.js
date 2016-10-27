'use strict';
const Express = require('express');
const Config = require('./config/development');

var app = Express();

app.listen(Config.port, () => {
  console.log('app running on port => ', Config.port);
});