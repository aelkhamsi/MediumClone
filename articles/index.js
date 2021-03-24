const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config');
const tokenValidation = require('./src/middlewares/token-validation');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

/////////////////////
//// MIDDLEWARES ////
/////////////////////

app.use(bodyParser.json()) //Parsed data is populated on the request object (i.e. req.body).
app.use(bodyParser.urlencoded( { extended: true }))
app.use(cors());
app.use(tokenValidation.verifyToken);

////////////////
//// ROUTES ////
////////////////

require('./src/routes/articles.routes')(app);

require('./src/routes/comments.routes')(app);

require('./src/routes/users.routes')(app);


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

