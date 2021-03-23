const Sequelize = require("sequelize");

const sequelize = new Sequelize('medium', 'root', "test", {
    host: 'localhost',
    port: 8111,
    dialect: "mysql",
    operatorsAliases: false
})

module.exports = sequelize;
global.sequelize = sequelize;