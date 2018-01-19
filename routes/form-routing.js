var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')
const Parent = require('../models/parent')
const Availability = require('../models/calendar')

// POST babysitter form into database
router.route('/babysitter')
  .post((req, res, next) => {
      Babysitter.create({
        emailaddress: req.body.emailaddress,
        password: req.body.password,
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        // image: req.body.image,
        // need to break this out from req.body.datepicker
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
        SunMorning: req.body.SunMorning,
        SunAfternoon: req.body.SunAfternoon,
        SunEvening: req.body.SunEvening,
        SunOvernight: req.body.SunOvernight,
        MonMorning: req.body.MonMorning,
        MonAfternoon: req.body.MonAfternoon,
        MonEvening: req.body.MonEvening,
        MonOvernight: req.body.MonOvernight,
        TuesMorning: req.body.TuesMorning,
        TuesAfternoon: req.body.TuesAfternoon,
        TuesEvening: req.body.TuesEvening,
        TuesOvernight: req.body.TuesOvernight,
        WedMorning: req.body.WedMorning,
        WedAfternoon: req.body.WedAfternoon,
        WedEvening: req.body.WedEvening,
        WedOvernight: req.body.WedOvernight,
        ThursMorning: req.body.ThursMorning,
        ThursAfternoon: req.body.ThurzAfternoon,
        ThursEvening: req.body.ThursEvening,
        ThursOvernight: req.body.ThursOvernight,
        FriMorning: req.body.FriMorning,
        FriAfternoon: req.body.FriAfternoon,
        FriEvening: req.body.FriEvening,
        FriOvernight: req.body.FriOvernight,
        SatMorning: req.body.SatMorning,
        SatAfternoon: req.body.SatAfternoon,
        SatEvening: req.body.SatEvening,
        SatOvernight: req.body.SatOvernight
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
.post((req, res, next) => {
    Parent.create({
      emailaddress: req.body.emailaddress,
      password: req.body.password,
      firstname:req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      // image: req.body.image,
      // need to break this out from req.body.datepicker
      birthyear: req.body.birthyear,
      birthmonth: req.body.birthmonth,
      birthdate: req.body.birthdate,
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
      cat:req.body.cat
    }).then(newParent => {
      res.render('form-success.hbs', {
        name: `${newParent.dataValues.firstname} ${newParent.dataValues.lastname}`,
        firstname: newParent.dataValues.firstname,
        type: 'parent'
      });
    })
  });

module.exports = router;
