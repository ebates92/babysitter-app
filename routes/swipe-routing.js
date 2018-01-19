var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
// const Parent = require('../models/parent')

// GET Babysitter data to share with Parents
router.route('/babysitters')
  .get((req, res, next) => {
    console.log('I MADE IT TO HERE*************')
    Babysitter.findAll().then((babysitter_data) =>{
      console.log(babysitter_data)
      res.send(babysitter_data);
    }).catch((err) => {
      console.log(err);
    })
  });

module.exports = router;
