const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {

    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;