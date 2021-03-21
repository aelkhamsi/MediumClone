const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
	user: "root",
	database:"medium",
	multipleStatements: true
});

module.exports = db;