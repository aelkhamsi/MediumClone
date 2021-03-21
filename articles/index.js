const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config');
const PORT = process.env.PORT || 3000;
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

require('./routes/articles.routes')(app);


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
