const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

/////////////////////
//// MIDDLEWARES ////
/////////////////////

app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use(cors());


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
