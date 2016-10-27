'use strict';
const Express = require('express');
const Router = Express.Router();

Router.get('/', (req, res, next) => {
  res.status(200).render('index', {name: req.query.name});
});

module.exports = Router;