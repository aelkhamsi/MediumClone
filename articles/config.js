const mysql = require('mysql');
const env = require('./environment');

const db = mysql.createConnection({
    host: "localhost",
	user: "achraf",
	password: env.DB_PASSWORD,
	database:"medium",
	multipleStatements: true
});

module.exports = db;



