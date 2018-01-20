var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')

// GET Initial Babysitter data to share with Parents
// need to capture Parent ID to get their filter preferences
router.route('/babysitters/:id')
  .get((req, res, next) => {
    Parent.find({
      where: {
        id: req.params.id
      }
      // pass the parent data to the babysitter query
    }).then((parent_data) => {
      console.log(parent_data)
      Babysitter.findAll({
        // SO FUCKING LOST!!!!!!!
        where: {
          // [Sequelize.Op.and]:[{parent_data.car:'true'},{car:'true'}]
        }
      }).then((babysitter_data) => {
        res.send(babysitter_data)
      }).catch((err) => {
        console.log(err)
      })
    });
  });

module.exports = router;
