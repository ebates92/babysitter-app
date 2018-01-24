var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter');
const Parent = require('../models/parent');
// const passportFacebook = require('passport-facebook');
// const passportLinkedIn = require('passport-linkedin');
const passport = require('passport');


// login application
router.route('/login/:type')
  .get((req,res) => {
    res.render('login.hbs', {
      type: req.params.type
    })
  })

// // logout of application
// router.route('/logout')
// .get((req,res) => {
//   // handle with passport
//   res.send('logging out')
// })
    

// // send user to sign in with Facebook
// router.route('/facebook/:type')
//   .get((req, res, next) => {
//       // handle with passport
//       let type = req.params.type;
//       passport.authenticate('facebook');
//       res.send('sending to facebook');
//     })

// router.route('/facebook/callback')
//   .get((req, res, next) => {
//       // handle with passport
//       passport.authenticate('facebook', { scope: ['email']})
//       // res.send('sending data back');
//     })

// send user to sign in with Linked-In
router.route('/linked-in/:type')
  .get((req, res, next) => {
      // handle with passport
      let type = req.params.type
      passport.authenticate('linkedin', {
        // look up api scopes
        scope: ['user_friends', 'manage_pages']
      })
      res.send('working')
    })


module.exports = router;
