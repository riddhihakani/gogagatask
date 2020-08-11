var express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    LocalStrategy = require('passport-local'),
    methodOverride = require('method-override')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongoose.connect("mongodb://localhost/task",{useNewUrlParser : true, useUnifiedTopology:true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
