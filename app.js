'use strict';
const Express = require('express');
const Config = require('./config/development');

const Main = require('./routes/main');

var app = Express();

app.use('/', Main);

app.listen(Config.port, () => {
  console.log('app running on port => ', Config.port);
});