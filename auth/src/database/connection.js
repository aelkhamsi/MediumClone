const Sequelize = require("sequelize");

const sequelize = new Sequelize('medium', 'achraf', "Zizoafrape07!", {
    host: 'localhost',
    dialect: "mysql",
    //operatorsAliases: false
})

module.exports = sequelize;
global.sequelize = sequelize;