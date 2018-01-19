var express = require('express');
var router = express.Router();
const Babysitter = require('../models/babysitter')

// POST babysitter form into database
router.route('/babysitter')
  .post((req, res, next) => {
      console.log(req.body)
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
        dogs: req.body.dogs
      }).then(newBabysitter => {
        console.log(newBabysitter)
        res.render('form-success.hbs', {
          name: `Evan Bates`
        });
      })
    });

module.exports = router;
