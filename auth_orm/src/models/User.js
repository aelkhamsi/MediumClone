const Sequelize = require('sequelize');
const { dropAllSchemas } = require('../database/connection');
const sequelize = require('../database/connection');

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING(255),
    email: Sequelize.STRING(255),
    password: Sequelize.STRING(255),
    role: Sequelize.STRING(255)
})