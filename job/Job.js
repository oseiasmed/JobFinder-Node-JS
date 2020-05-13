const Sequelize = require("sequelize");
const connection = require("../db/connection");

const Job = connection.define('jobs', {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    salary: {
        type: Sequelize.STRING,
        allowNull: false
    },

    company: {
        type: Sequelize.STRING,
        allowNull: false

    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    new_job: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Job;