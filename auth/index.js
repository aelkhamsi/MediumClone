const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;



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

require('./src/routes/auth.routes.js')(app);


///////////////////////////
/// DATABASE CONNECTION ///
///////////////////////////

require('./src/database/connection');


////////////////
//// LISTEN ////
////////////////

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
