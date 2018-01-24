const Sequelize = require('sequelize');
const connection = new Sequelize('BABYSITTER_APP', 'christopher.rithmyxay',"", {
    host:'localhost',
    dialect: 'postgres'
});

module.exports = connection;