var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter');
const Parent = require('../models/parent');
const passportFacebook = require('passport-facebook');
const passportLinkedIn = require('passport-linkedin');


// login application
router.route('/login/:type')
  .get((req,res) => {
    res.render('login.hbs', {
      type: req.params.type
    })
  })

// logout of application
router.route('/logout')
.get((req,res) => {
  // handle with passport
  res.send('logging out')
})
    

// send user to sign in with Facebook
router.route('/facebook/:type')
  .get((req, res, next) => {
      // handle with passport
      let type = req.params.type;
      passportFacebook.authenticate('facebook', {
        // look up api scopes
        scope: ['']
      });
    })

// send user to sign in with Linked-In
router.route('/linked-in/:type')
  .get((req, res, next) => {
      // handle with passport
      let type = req.params.type
      passportLinkedIn.authenticate('linked-in', {
        // look up api scopes
        scope: ['']
      })
    })


module.exports = router;