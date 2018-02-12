const passport = require('passport');
const FacebookStrategy = require("passport-facebook").Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const keys = require('./keys');
const Parent = require('../models/parent');
const Babysitter = require('../models/babysitter')
const Authentication = require('../models/authentication')
const defaultParent = require('./new-parent')


// Accept the express `app` instance as an arg
// That way, we don't declare it here.
const setupAuth = (app) => {
    
      // #1 set up cookie middleware
      app.use(cookieParser());
    
      // #2 set up session middleware
      app.use(session({
        secret: 'whatever',
        resave: true,
        saveUninitialized: true
      }));
    
      // #3 set up passport strategy
      passport.use(new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL:'http://localhost:3000/auth/facebook/callback'
      }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        console.log(1)
        // Translate the github profile into a Blog user
        Authentication.findOrCreate({
            where: { facebook_profile_id: profile.id},
            defaults: {
              type: 'parent',
              isnew: true,
              facebook_profile_id: profile.id,
            }
        }).then(result => {
          console.log(2)
          // `findOrCreate` returns an array
          // The actual user instance is the 0th element in the array
          let authorized_user = result[0];
          let isNew = result[1];
          // Pass that to the `done` callback as the 2nd arg.
          // The 1st arg is reserved for any errors that occur.
          return done(null, authorized_user);
        })
        .catch(err => {
          console.log('that did not work');
    
          // If there was an error, pass that as 1st arg
          // And null as the 2nd arg (because there was no user retrieved
          // from the database);
          return done(err, null);
        })
    
      }));
    
    
      // #4 call passport.serializeUser
      // This configures how passport turns a user object
      // into something it can track in a session.
      passport.serializeUser(function(user, done) {
        // placeholder for custom user serialization
        // null is for errors
        console.log('we are serializing');
        console.log(4)
        done(null, user);
      });
    
      // #5 call passport.serializeUser
      // This configures how passport checks what's in the
      // session to see if the login is still valid.
      passport.deserializeUser(function(user, done) {
        console.log('we are deserializing');
        // placeholder for custom user deserialization.
        // maybe you are going to get the user from mongo by id?
        // null is for errors
        console.log(5)
          done(null,user)
        // done(null,id)

      });
    
      // #6 initialize passport middleware and register it with express
      app.use(passport.initialize());
    
      // #7 start passport's session management middleware and
      // register it with express
      app.use(passport.session());
    
      app.get('/logout', function(req, res, next) {
        console.log('logging out');
        req.logout();
        res.redirect('/');
      });
    
      // Our auth route is what Github will redirect to after the user logs in
      // and says it's ok to use our app.
      // This is treated as a protected route because we have to confirm that Github
      // actually said it was ok.
      // The actual route handler is just going to redirect us to the home page.
      app.get('/auth/facebook/callback',
        // AVOIDING DOUBLE AUTHENTICATION BECAUSE FACEBOOK SUCKS
        // passport.authenticate('facebook', { failureRedirect: '/login' }),
        (req, res) => {
          // if you don't have your own route hadndler after the passport.authenticate middleware
          // then you get stuck in the infinite loop
          console.log('you just logged in');
          console.log(6)
          console.log(req.isAuthenticated());
            if (req.user.isnew === true) {
                Authentication.findOne({
                  where: {id:req.user.id},
                }).then((user) => {
                  console.log(7)
                  user.update({
                    type: req.cookies.type
                  })
                })
                console.log('im new')
                console.log(req.user.isnew)
                res.redirect('/form/parent')
            } else if (req.user.isnew === false) {
                console.log('im old')
                console.log(req.user.isnew)
                res.redirect('/swipe')
            }
        }
    );

    // #8 register our login, logout, and auth routes
    app.get('/auth/facebook/:type', (req, res, next) => {
      console.log(req.params.type)
      res.cookie('type', req.params.type ,{expires: new Date(Date.now()+60*10080)});
      next();
    }, passport.authenticate('facebook'));
    
      // That's it.
      // That's the end of our passport setup for github
}
    
    
    // This is a convenience method that we'll use as a route
    // handler. It checks if the request is associated with a
    // valid, logged-in user. If so, we just hand off to the `next()`
    // route handler. If not, then take them to the login route.
    const ensureAuthenticated = (req, res, next) => {
    
      if (req.isAuthenticated()) {
        // req.user is available for use here
        console.log('we are all good');
        return next();
      }
    
      console.log('clearly, they are not authenticated');
      // denied. redirect to login
      res.redirect('/');
    }
    
    // Our default export is the `setupAuth` function.
    // That will be used like so:
    // const setupAuth = require('./auth');
    // setupAuth(app);
    module.exports = setupAuth;
    
    // Secondarily, we want to export our route handler that checks
    // for a logged-in user.
    // That gets pulled in like so:
    // const ensureAuthenticated = require('../auth').ensureAuthenticated;
    module.exports.ensureAuthenticated = ensureAuthenticated;
    