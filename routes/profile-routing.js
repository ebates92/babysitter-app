var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection = require('../database');
const Authentication = require('../models/authentication');
const Parent = require('../models/parent');
const Filter = require('../models/filter');

//GET previous selected information.
router.route('/profile')
  .get((req, res) => {
    // res.render('profile')
    Filter.findOne({
        where: {
            parentId: 1 //pulls current parent's id for filter
          }
    }).then((filter_data) => {
    res.render('profile'); // renders the profile handlebars
    // needs to be populated with parent id's 
  })

})

module.exports = router;