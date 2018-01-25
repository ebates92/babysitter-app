var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Match = require('../models/match')

router.route('/babysitters/:id')
    .post((req, res) =>{
        Match.create({
            like: req.body.like,
            babysitter_id: req.body.babysitter_id,
            parent_id: req.body.parent_id
    })
})

module.exports = router; 