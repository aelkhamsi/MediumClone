//import dependencies
const express = require('express');
const path = require('path');
const db = require('./config');
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
    res.send("<h1> Hello World! </h1>");
});


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



//////////////////
///// LISTEN /////
//////////////////

app.listen(PORT, () => {
    console.log(`Server running on port  ${PORT}`)
});
