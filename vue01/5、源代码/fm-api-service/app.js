var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var storyRouter = require('./routes/story');
var listenRouter = require('./routes/listen');
var bannerRouter = require('./routes/banner');
var introRouter = require('./routes/intro');
var playRouter = require('./routes/play');
var navlistRouter = require('./routes/navlist');
var shopcartsRouter = require('./routes/shopcarts');
var shoptjRouter = require('./routes/shoptj');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/story', storyRouter);
app.use('/listen', listenRouter);
app.use('/banner', bannerRouter);
app.use('/intro', introRouter);
app.use('/play', playRouter);
app.use('/navlist',navlistRouter);
app.use('/shopcarts',shopcartsRouter);
app.use('/shoptj',shoptjRouter)



module.exports = app;
