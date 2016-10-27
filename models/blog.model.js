'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let blog = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new Mongoose.Types.ObjectId()
  },
  title: {
    type: String,
    required: true,
    index: true
  },
  blogBody: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = Mongoose.model('Blog', blog);