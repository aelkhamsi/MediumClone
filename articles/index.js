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

require('./routes/comments.routes')(app);

require('./routes/users.routes')(app);


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

// let sql = `CREATE TABLE articles(id int AUTO_INCREMENT, userId int, name VARCHAR(255), reference VARCHAR(255), content VARCHAR(8000), draft BIT, createdAt DATE, updatedAt DATE, PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id)
// )`;
// db.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log("Articles Table Created...");
// })

// let sql = `CREATE TABLE comments(id int AUTO_INCREMENT, userId int, articleId int, comment VARCHAR(255), PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(articleId) REFERENCES articles(id)
// )`;
// db.query(sql, (err, result) => {
//    if (err) throw err;
//    console.log("Comments Table Created...");
// })
//////////////////
///// LISTEN /////
//////////////////

app.listen(PORT, () => {
    console.log(`Server running on port  ${PORT}`)
});
