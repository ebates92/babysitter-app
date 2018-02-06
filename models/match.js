const Sequelize = require('sequelize');
const connection = require('../database');
const Babysitter = require('./babysitter')
const Parent = require('./parent')

const Match = connection.define('match', {
    is_match: {
        type: Sequelize.BOOLEAN
    }
});

Match.belongsTo(Parent);
Match.belongsTo(Babysitter);

// connection.sync ({
//     force: true
// }).then( () => {

// });

module.exports = Match;