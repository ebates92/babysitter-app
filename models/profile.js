var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection = require('../database');
const Authentication = require('./authentication');
const Parent = require('../models/parent');
const Filter = require('../models/filter');

//GET previous selected information.
router.route('/profile')
  .get((req, res) => {
    console.log(req.user)
    Filter.findOne({
      where: {
        parentId: req.user.id //pulls current parent's id for filter
      }
    })
  }).then((filter_data) => {
    res.render('profile')
  })


