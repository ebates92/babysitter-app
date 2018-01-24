const Sequelize = require('sequelize');
const connection = require('../database');

const Match = connection.define('match', {
    like: {
        type: Sequelize.BOOLEAN
    },
    babysitter_id: {
        type: Sequelize.INTEGER
    },
    parent_id: {
        type: Sequelize.INTEGER
    }
});

connection.sync ({
    force: true
}).then( () => {

});

module.exports = Match;