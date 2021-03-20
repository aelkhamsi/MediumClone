const express = require('express');
const bodyParser = require('body-parser');

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
