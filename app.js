var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// PASSPORT SET-UP
var setupFacebookParent = require('./config/passport-facebook-parent');

// ROUTING FILES
var passport = require ('./routes/auth-routing');
var formRouting = require('./routes/form-routing');
var swipeRouting = require('./routes/swipe-routing');
var navRouting = require('./routes/nav-routing');
var chatRouting = require('./routes/chat-routing');
var profileRouting = require('./routes/profile-routing');



var app = express();
setupFacebookParent(app);
// setupChatRoom(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// USING THE ROUTE FILES
app.use('/auth', passport);
app.use('/form', formRouting);
app.use('/swipe', swipeRouting);
app.use('/nav', navRouting);
app.use(profileRouting);
app.use(chatRouting);

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
