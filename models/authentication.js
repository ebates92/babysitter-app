const Sequelize = require('sequelize');
const connection = require('../database');

const Authentication = connection.define('authentication', {
    type: {
        type: Sequelize.STRING,
    },
    isnew: {
        type: Sequelize.BOOLEAN,
    },
    facebook_profile_id: {
        type: Sequelize.STRING,
    },
})

module.exports = Authentication;