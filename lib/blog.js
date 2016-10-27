'use strict';


module.exports = {
  getNewBlog: getNewBlog,
  saveNewBlog: saveNewBlog
};

function getNewBlog(req, res){
  res.status(200).render('create-blog');
}

function saveNewBlog(req, res){
  console.log(req.body);
  res.status(200).render('create-blog');
}