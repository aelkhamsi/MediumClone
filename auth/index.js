const express = require('express');
const bodyParser = require('body-parser');

/////////////////////////////
//// Database connection ////
/////////////////////////////

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  database : 'medium'
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database...");
});

// let sql = 'CREATE DATABASE medium';
// db.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log("Medium database created...");
// })





const PORT = process.env.PORT || 5000;
const app = express();


//Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//Routes
require('./routes/auth.routes.js')(app);


app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
