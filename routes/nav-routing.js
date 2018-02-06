var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Match = require('../models/match')


router.route('/profile')
    .get((req, res) =>{
        Match.create({
            like: req.body.like,
            babysitter_id: req.body.babysitter_id,
            parent_id: req.body.parent_id
        })
    })  

router.route('/filters')
    .get((req, res) =>{
        Match.create({
            like: req.body.like,
            babysitter_id: req.body.babysitter_id,
            parent_id: req.body.parent_id
        })
    })

router.route('/logout')
.get((req, res) =>{
    Match.create({
        like: req.body.like,
        babysitter_id: req.body.babysitter_id,
        parent_id: req.body.parent_id
    })
})

// RETURNS MATCHES FOR PARENT
router.route('/match')
.get((req, res) =>{
    Match.create({
        like: req.body.like,
        babysitter_id: req.body.babysitter_id,
        parent_id: req.body.parent_id
    })
})

router.route('/match')

module.exports = router; 