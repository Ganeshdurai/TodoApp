var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todo = require('./routes/todo');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/todos', express.static(path.join(__dirname, 'dist')));
app.use('/todo', todo);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


mongoose.connect('mongodb://localhost:27017/todo')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;