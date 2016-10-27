'use strict';
const Express = require('express');
const Router = Express.Router();
const Blog = require('./../lib/blog');

Router.get('/', (req, res, next) => {
  res.status(200).render('index', {name: req.query.name});
});

Router.get('/newBlog', Blog.getNewBlog);
Router.post('/newBlog', Blog.saveNewBlog);


module.exports = Router;