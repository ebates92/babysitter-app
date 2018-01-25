var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Filter = require('../models/filter')
const filterBabysitters = require('./filter-function')

// GET Initial Babysitter data to share with Parents
// need to capture Parent ID to get their filter preferences
router.route('/babysitters')
  .get((req, res, next) => {
    Filter.findOne({
      where: {
        // parentId: req.params.id,
        parentId: 1
        // findall filter data by parent foreign key
      }
      // pass the parent data to the babysitter query
    }).then((parent_filter_data) => {
      console.log(parent_filter_data);
      let filter = filterBabysitters(parent_filter_data);
      Babysitter.findAll({
        where: filter
      }).then((babysitter_data) => {
        res.send(babysitter_data)
      }).catch((err) => {
        console.log(err)
      })
    });
  });


router.route('/')
  .get((req,res) => {
    res.render('swipe')
      })
          
  

module.exports = router;
