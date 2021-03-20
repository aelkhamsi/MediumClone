const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

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


/////////////////////
//// Middlewares ////
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
app.use((req, res, next) => {
  req.db = db
  next();
})


////////////////
//// Routes ////
////////////////

require('./routes/auth.routes.js')(app);


///////////////////
//// Listening ////
///////////////////

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
