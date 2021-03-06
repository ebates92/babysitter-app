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
        clientID: process.env.facebookclientID,
        clientSecret: process.env.facebookclientSecret,
        callbackURL:`${process.env.host}/auth/facebook/callback`,
        scope: ['email','basic_info'],
        profileFields: ['id', 'displayName', 'photos', 'emails', 'birthday']
      }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        // Translate the github profile into a Blog user
        let name = profile.displayName.split(' ')
        console.log(name)
        console.log(profile.emails[0].value)
        console.log(profile.photos[0].value)
        Authentication.findOrCreate({
            where: { facebook_profile_id: profile.id},
            defaults: {
              type: 'parent',
              isnew: true,
              facebook_profile_id: profile.id,
              firstname: name[0],
              lastname: name[1],
              emailaddress: profile.emails[0].value,
              image: profile.photos[0].value
            }
        }).then(result => {
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
          done(null,user)
        console.log(user)
        // done(null,id)

      });
    
      // #6 initialize passport middleware and register it with express
      app.use(passport.initialize());
    
      // #7 start passport's session management middleware and
      // register it with express
      app.use(passport.session());
    
      // #8 register our login, logout, and auth routes
      app.get('/auth/facebook/:type',
        passport.authenticate('facebook'));
    
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
          // updates the authentication table to the type parent/babysitter so that it can be referenced later
          console.log(req.cookies.type)
          Authentication.findOne({
            where: {id: req.user.id}
          }).then((authentication_user) => {
            authentication_user.update({
              type: req.cookies.type
            })
          }).then((d) => {
            // if you don't have your own route hadndler after the passport.authenticate middleware
            // then you get stuck in the infinite loop
            console.log('you just logged in');
            console.log(req.isAuthenticated());
              if (req.user.isnew === true) {
                  console.log('im new')
                  console.log(req.user.isnew)
                  if (req.cookies.type === 'parent') {
                    res.redirect('/form/parent')
                  } else {
                    res.redirect('/form/babysitter')
                  }
                  
              } else if (req.user.isnew === false) {
                  console.log('im old')
                  console.log(req.user.isnew)
                  if (req.cookies.type === 'parent') {
                    res.redirect('/swipe')
                  } else {
                    res.redirect('/matches')
                  }
              }
          })

        }
    );
    
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
    