'use strict';
const path = require('path');
const Express = require('express');
const Morgan = require('morgan');
const Moment = require('moment');
const Chalk = require('chalk');
const BodyParser = require('body-parser');

var app = Express();

// setting view engine
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'pug');

// middleware
app.use(requestLogger());
app.use(Express.static(path.join(__dirname, '/../public')));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

function requestLogger() {
  Morgan.token('datetime', function(req, res) {
    return Moment().format('YYYY/MM/DD HH:mm:ss');
  });

  Morgan.token('met', function(req, res) {
    return req.method.substr(0, 3);
  });

  Morgan.token('st', function (req, res) {
    if (res.statusCode < 400) {
      return Chalk.green(res.statusCode);
    } else if (res.statusCode >= 400 && res.statusCode < 500) {
      return Chalk.yellow(res.statusCode);
    } else {
      return Chalk.red(res.statusCode);
    }
  });

  return Morgan(':datetime - :st :met :url (:response-time ms)');
}

module.exports = app;