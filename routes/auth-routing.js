var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')


// send user to sign in with facebook
router.route('/facebook')
  .get((req, res, next) => {
      // handle with passport
      res.send('logging in with facebook')
    })

// logout of application
router.route('/logout')
    .get((req,res) => {
      // handle with passport
      res.send('logging out')
    })
        
module.exports = router;
