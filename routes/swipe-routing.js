var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')

// POST babysitter form into database
router.route('/babysitter')
  .get((req, res, next) => {
      }).then(newBabysitter => {
        res.render('form-success.hbs', {
          name: `${newBabysitter.dataValues.firstname} ${newBabysitter.dataValues.lastname}`,
          firstname: newBabysitter.dataValues.firstname,
          type: 'babysitter'
        });
    });

module.exports = router;
