const Sequelize = require('sequelize');
const connection = require('../database');
const Authentication = require('./authentication')

const Parent = connection.define('parent', {

    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zipcode: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    birthyear: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    birthmonth: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    birthdate: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /^male$|^female$/,
        //         msg: 'The value for gender must be either male or female.'
        //     }
        // }
    },
    boys: {
        type: Sequelize.INTEGER
    },
    boys_0_6months: {
        type: Sequelize.INTEGER
    },
    boys_7months_3years: {
        type: Sequelize.INTEGER
    },
    boys_4_6years: {
        type: Sequelize.INTEGER
    },
    boys_7_11years: {
        type: Sequelize.INTEGER
    },
    boys_12_years: {
        type: Sequelize.INTEGER
    },
    girls: {
        type: Sequelize.INTEGER
    },
    girls_0_6months: {
        type: Sequelize.INTEGER
    },
    girls_7months_3years: {
        type: Sequelize.INTEGER
    },
    girls_4_6years: {
        type: Sequelize.INTEGER
    },
    girls_7_11years: {
        type: Sequelize.INTEGER
    },
    girls_12_years: {
        type: Sequelize.INTEGER
    },
    dog: {
        type: Sequelize.STRING,
    },
    cat:{
        type: Sequelize.STRING,
     },
})

Parent.belongsTo(Authentication);


// // on first run you will need to enable force = true

// on first run you will need to enable force = true

// connection.sync ({
//     // force: true
// }).then( () => {

// });

module.exports = Parent;