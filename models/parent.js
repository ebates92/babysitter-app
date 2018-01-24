const Sequelize = require('sequelize');
const connection = require('../database');

const Parent = connection.define('parent', {
    isnew: {
        type: Sequelize.BOOLEAN,
    },
    facebook_profile_id: {
        type: Sequelize.STRING,
    },
    emailaddress: {
        type: Sequelize.STRING,
        // unique: true,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //         msg: 'Please enter a valid email address.'
        //     }
        // }
    },
    password: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        //         msg: 'Passwords must contain a combination of 6 characters, capital letters, lowercase letters and special characters.'
        //     }
        // }
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
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
    image: {
        type: Sequelize.STRING,
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

// on first run you will need to enable force = true
connection.sync ({
    // force: true
}).then( () => {

});

module.exports = Parent;