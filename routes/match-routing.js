var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Match = require('../models/match')

router.route('/babysitters/:id')
    .get((req, res) =>{
        Parent.findAll({
            where: {
                id: req.params.id
            }
        })
    })

module.exports = router; 