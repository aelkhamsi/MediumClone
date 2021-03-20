const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1> Hello World! </h1>');
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
