'use strict';
const Express = require('express');
const Router = Express.Router();

Router.get('/', (req, res, next) => {
  res.status(200).send('Hello '+ req.query.name);
});

module.exports = Router;