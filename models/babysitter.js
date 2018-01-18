const Sequelize = require('sequelize');
const connection = require('../database');

const Babysitter = connection.define('babysitter', {
    emailaddress: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        }
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
        allowNull: false,
        validate: {
            is: /^[0-9]+$/,
        }
    },
    image: {
        type: Sequelize.STRING,
    },
    birthyear: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            is: /^[0-9]+$/
        }
    },
    birthmonth: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    birthdate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    maxchildren: {
        type: Sequelize.INTEGER,
    },
    paidexperience: {
        type: Sequelize.INTEGER,
    },
    hourlyrate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    mileswilling: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    agegroup: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT,
    },
    education: {
        type: Sequelize.STRING,
    },
    schoolname: {
        type: Sequelize.STRING,
    },
    languages: {
        type: Sequelize.STRING,
        defaultValue: 'English',
    },
    transportation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    smoke: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pets: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cats: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dogs: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

connection.sync ({
    force: true
}).then( () => {

});