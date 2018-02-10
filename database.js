const Sequelize = require('sequelize');

const connection = new Sequelize('babysitter', 'alexandercleoni','', {

    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;