var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Match = require('../models/match')
const Authentication = require('../models/authentication')


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
    .get((req, res, next) => {
        Match.findAll({
            where: {
                parentAuthId: req.user.id,
                is_match: true
            },
            include: [{
                model: Authentication, as: 'babysitterAuth'
            }],
        }).then((babysitters) => {
            console.log(babysitters)
            // console.log(match_data)
            // res.send(babysitters)
            res.render('matches.hbs',{
                array: babysitters
            })
        }).catch((err) => {
            console.log(err);
        })
    })


module.exports = router; 