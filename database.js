const Sequelize = require('sequelize');
const connection = new Sequelize('BABYSITTER_APP', 'evanbates',"", {
    host:'localhost',
    dialect: 'postgres'
});

module.exports = connection;