const Sequelize = require('sequelize');
const connection = require('../database');
const Parent = require('./parent')

const parentFilters = connection.define('parent_filter', {
    transportation: {
        type: Sequelize.BOOLEAN,
    }, 
    smoke: {
        type: Sequelize.BOOLEAN,
    }, 
    hourlyrate: {
        type: Sequelize.INTEGER,
    }, 
    sun_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    sun_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    sun_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    sun_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    mon_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    mon_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    mon_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    mon_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    tues_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    tues_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    tues_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    tues_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    wed_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    wed_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    wed_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    wed_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    thurs_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    thurs_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    thurs_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    thurs_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    fri_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    fri_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    fri_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    fri_overnight: {
        type: Sequelize.BOOLEAN,
    }, 
    sat_morning: {
        type: Sequelize.BOOLEAN,
    }, 
    sat_afternoon: {
        type: Sequelize.BOOLEAN,
    }, 
    sat_evening: {
        type: Sequelize.BOOLEAN,
    }, 
    sat_overnight: {
        type: Sequelize.BOOLEAN,
    }
});

parentFilters.belongsTo(Parent);

// parentFilters.sync()
//     .then(() => {

//     })

module.exports = parentFilters;