const Sequelize = require('sequelize');
const connection = require('../database');

const msg = connection.define('message', {
    content: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.DATE
    },
    threadId: {
        type: Sequelize.STRING
    },
    senderId: {
        type: Sequelize.STRING
    }
})

connection.sync ({
    // force: true
}).then( () => {

})

module.exports = msg;