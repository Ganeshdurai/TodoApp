var mongoose = require('mongoose');

var Todo = new mongoose.Schema({
    status: String,
    title: String,
    
  });
  module.exports = mongoose.model('Todo', Todo);
