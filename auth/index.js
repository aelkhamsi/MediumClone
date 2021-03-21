const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config');
const PORT = process.env.PORT || 5000;
const app = express();


/////////////////////
//// MIDDLEWARES ////
/////////////////////

app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use( (req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, x-access-token')
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  }
  res.header('Content-Type', 'application/json') //REST-API: we only send back json data
  next()
})


////////////////
//// ROUTES ////
////////////////

require('./routes/auth.routes.js')(app);


///////////////////////////
/// DATABASE CONNECTION ///
///////////////////////////

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Database...')
});

global.db = db;

setInterval(function () { //to keep the connection alive, make frequent quries to SQL database
  db.query('SELECT 1');
}, 5000);

// let sql = 'CREATE DATABASE medium';
// db.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log("Medium database created...");
// })

// let sql = `CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255), role VARCHAR(255), createdAt DATE, updatedAt DATE, PRIMARY KEY(id)
// )`;
// db.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log("Users Table Created...");
// })


////////////////
//// LISTEN ////
////////////////

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
