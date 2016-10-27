'use strict';
const Blog = require('./../models/blog.model');

module.exports = {
  getNewBlog: getNewBlog,
  saveNewBlog: saveNewBlog
};

function getNewBlog(req, res){
  res.status(200).render('create-blog');
}

function saveNewBlog(req, res){
  let blog = new Blog();
  for(let key in req.body) blog[key] = req.body[key];

  blog.save((err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
  res.status(200).render('create-blog');
}