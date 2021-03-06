const Sequelize = require('sequelize');
const { dropAllSchemas } = require('../database/connection');
const sequelize = require('../database/connection');

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: Sequelize.STRING(255),
    email: {
        type: Sequelize.STRING(255),
        unique: true
    },
    password: Sequelize.STRING(255),
    role: Sequelize.STRING(255)
},{
    freezeTableName: true,
    tableName: 'users'
})