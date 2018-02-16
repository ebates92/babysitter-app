const Sequelize = require('sequelize');
const connection = require('../database');

const Authentication = connection.define('authentication', {
    type: {
        type: Sequelize.STRING
    },
    isnew: {
        type: Sequelize.BOOLEAN
    },
    facebook_profile_id: {
        type: Sequelize.STRING
    },
    emailaddress: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
})

// connection.sync ({
//     force: true
// }).then( () => {

// });

module.exports = Authentication;