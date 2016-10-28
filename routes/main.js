'use strict';
const Express = require('express');
const Router = Express.Router();
const Blog = require('./../lib/blog');

Router.get('/', Blog.getAllBlogs);

Router.get('/newBlog', Blog.getNewBlog);
Router.post('/newBlog', Blog.saveNewBlog);
Router.get('/blog/:id', Blog.getBlogDetail);
Router.post('/newComment/:id', Blog.saveComment)


module.exports = Router;