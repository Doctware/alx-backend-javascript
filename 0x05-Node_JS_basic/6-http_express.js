const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

const port = 1245;
app.listen(port);

module.exports = app;
