const Sequelize = require('sequelize');
const connection = require('../database');


// To create a model for db for all messages
const msg = connection.define('message', {
    content: {
        type: Sequelize.STRING
    },
    senderId: {
        type: Sequelize.STRING
    }
})


module.exports = msg;