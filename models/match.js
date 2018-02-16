const Sequelize = require('sequelize');
const connection = require('../database');
const Babysitter = require('./babysitter')
const Parent = require('./parent')
const Authentication = require('./authentication')

const Match = connection.define('match', {
    is_match: {
        type: Sequelize.BOOLEAN
    }
});

Match.belongsTo(Authentication, {as: 'babysitterAuth'});
Match.belongsTo(Authentication, {as: 'parentAuth'});

// connection.sync ({
//     force: true
// }).then( () => {

// });

module.exports = Match;