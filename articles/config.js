const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
	user: "achraf",
	password: "Zizoafrape07!",
	database:"medium",
	multipleStatements: true
});

module.exports = db;



