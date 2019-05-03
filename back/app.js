var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cardRouter = require('./routes/card');
var listWordsRouter = require('./routes/listWords');


var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

/*settings*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});

/*routing*/
app.use('/api/card/', cardRouter);
app.use('/api/listWords/', listWordsRouter);

app.get('*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



module.exports = app;
