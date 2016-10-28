'use strict';
const Blog = require('./../models/blog.model');

module.exports = {
  getNewBlog: getNewBlog,
  saveNewBlog: saveNewBlog,
  getAllBlogs: getAllBlogs,
  getBlogDetail: getBlogById,
  saveComment: saveComment
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
  res.redirect('/');
}

function getAllBlogs(req, res){
  Blog
    .find()
    .sort({uploadDate: -1})
    .exec((err, data) => {
      if(err) res.status(500).render('error');
      else res.status(200).render('index', {blogs: data});
    });
}

function getBlogById(req, res){
  Blog
    .findOne({_id: req.params.id})
    .exec((err, data) => {
      if(err) res.status(500).render('error');
      else {
        data.comments.sort(function (c1, c2) { return c2.commentDate - c1.commentDate; });
        res.status(200).render('blogDetail', {blog: data});
      }
    });
}

function saveComment(req, res){
  Blog
    .findOne({_id: req.params.id})
    .exec((err, blog) => {
      if (err) res.status(500).render(error);
      else {
        let newComment = {};
        newComment.name = req.body.name;
        newComment.comment = req.body.comment;
        blog.comments.push(newComment);

        blog
          .save((err, data) => {
            if (err) res.status(500).render(error);
            else res.redirect('/blog/' + req.params.id);
          })
      }
    });
}