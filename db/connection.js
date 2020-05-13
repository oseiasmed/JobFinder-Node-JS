const Sequelize = require("sequelize");

const connection = new Sequelize('job_finder', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "+03:00"
});

module.exports = connection;