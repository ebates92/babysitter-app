const Sequelize = require('sequelize');

<<<<<<< HEAD
const connection = new Sequelize('BABYSITTER_APP', 'christopher.rithmyxay','', {
=======
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
>>>>>>> ebates92/passportadditionalvalues

    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;