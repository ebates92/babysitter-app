var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const parentFilter = require('../models/filter')

// POST babysitter form into database
router.route('/babysitter')
  .get((req, res, next) => {
    res.render('form-babysitter')
  })
  .post((req, res, next) => {
    debugger
    console.log('monday morning'+ req.body.mon_morning);
    console.log('sunday morning' + req.body.sun_morning);
      Babysitter.create({
        authenticationId: req.user.id,
        emailaddress: req.body.emailaddress,
        password: req.body.password,
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        image: req.body.image,
        birthyear: req.body.birthyear,
        birthmonth: req.body.birthmonth,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        maxchildren: req.body.maxchildren,
        experience: req.body.experience,
        hourlyrate: req.body.hourlyrate,
        mileswilling: req.body.mileswilling,
        agegroup: req.body.agegroup,
        summary:req.body.summary,
        education: req.body.education,
        institution: req.body.institution,
        languages: req.body.languages,
        transportation: req.body.transportation,
        smoke: req.body.smoke,
        pets: req.body.pets,
        cats: req.body.cats,
        dogs: req.body.dogs,
        sun_morning: req.body.sun_morning,
        sun_afternoon: req.body.sun_afternoon,
        sun_evening:req.body.sun_evening,
        sun_overnight: req.body.sun_overnight,
        mon_morning: req.body.mon_morning,
        mon_afternoon: req.body.mon_afternoon,
        mon_evening: req.body.mon_evening,
        mon_overnight: req.body.mon_overnight,
        tues_morning: req.body.tues_morning,
        tues_afternoon: req.body.tues_afternoon,
        tues_evening: req.body.tues_evening,
        tues_overnight: req.body.tues_overnight,
        wed_morning: req.body.wed_morning,
        wed_afternoon: req.body.wed_afternoon,
        wed_evening: req.body.wed_evening,
        wed_overnight: req.body.wed_overnight,
        thurs_morning: req.body.thurs_morning,
        thurs_afternoon: req.body.thurs_afternoon,
        thurs_evening: req.body.thurs_evening,
        thurs_overnight: req.body.thurs_overnight,
        fri_morning: req.body.fri_morning,
        fri_afternoon: req.body.fri_afternoon,
        fri_evening: req.body.fri_evening,
        fri_overnight: req.body.fri_overnight,
        sat_morning: req.body.sat_morning,
        sat_afternoon: req.body.sat_afternoon,
        sat_evening: req.body.sat_evening,
        sat_overnight: req.body.sat_overnight
      }).then(newBabysitter => {
        res.render('form-success.hbs', {
          name: `${newBabysitter.dataValues.firstname} ${newBabysitter.dataValues.lastname}`,
          firstname: newBabysitter.dataValues.firstname,
          type: 'babysitter'
        });
      })
    });


// POST parent form into database
router.route('/parent')
  .get((req,res) => {
    res.render('form-parent')
      })
  .post((req, res, next) => {
    debugger
    console.log(req.user.id)
    debugger
      Parent.create({
        authenticationId: req.user.id,
        // isnew: false,
        // emailaddress: req.body.emailaddress,
        // password: req.body.password,
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        // image: req.body.image,
        // need to break this out from req.body.datepicker
        // birthyear: req.body.birthyear,
        // birthmonth: req.body.birthmonth,
        // birthdate: req.body.birthdate,
        gender: req.body.gender,
        boys: req.body.boys,
        boys_0_6months: req.body.boys_0_6months,
        boys_7months_3years: req.body.boys_7months_3years,
        boys_4_6years: req.body.boys_4_6years,
        boys_7_11years: req.body.boys_7_11years,
        boys_12_years: req.body.boys_12_years,
        girls: req.body.girls,
        girls_0_6months: req.body.girls_0_6months,
        girls_7months_3years: req.body.girls_7months_3years,
        girls_4_6years: req.body.girls_4_6years,
        girls_7_11years: req.body.girls_7_11years,
        girls_12_years: req.body.girls_12_years,
        dog: req.body.dog,
        cat: req.body.cat
      }).then(newParent => {
        res.render('form-success.hbs', {
          name: `${newParent.dataValues.firstname} ${newParent.dataValues.lastname}`,
          firstname: newParent.dataValues.firstname,
          type: 'parent'
        });
      }).catch((err) => {
      console.log(err)
    })
  })


router.route('/filter')
    .post((req,res,next) => {
      parentFilter.create({
        transportation: req.body.transportation,
        smoke: req.body.smoke,
        hourlyrate: req.body.hourlyrate,
        sun_morning: req.body.sun_morning,
        sun_afternoon: req.body.sun_afternoon,
        sun_evening: req.body.sun_evening,
        sun_overnight: req.body.sun_overnight,
        mon_morning: req.body.mon_morning,
        mon_afternoon: req.body.mon_afternoon,
        mon_evening: req.body.mon_evening,
        mon_overnight: req.body.mon_overnight,
        tues_morning: req.body.tues_morning,
        tues_afternoon: req.body.tues_afternoon,
        tues_evening: req.body.tues_evening,
        tues_overnight: req.body.tues_overnight,
        wed_morning: req.body.wed_morning,
        wed_afternoon: req.body.wed_afternoon,
        wed_evening: req.body.wed_evening,
        wed_overnight: req.body.wed_overnight,
        thurs_morning: req.body.thurs_morning,
        thurs_afternoon: req.body.thurs_afternoon,
        thurs_evening: req.body.thurs_evening,
        thurs_overnight: req.body.thurs_overnight,
        fri_morning: req.body.fri_morning,
        fri_afternoon: req.body.fri_afternoon,
        fri_evening: req.body.fri_evening,
        fri_overnight: req.body.fri_overnight,
        sat_morning: req.body.sat_morning,
        sat_afternoon: req.body.sat_afternoon,
        sat_evening: req.body.sat_evening,
        sat_overnight: req.body.sat_overnight
        })  
      })
    .get((req,res,next) => {
      res.render('filter')
    })




module.exports = router;