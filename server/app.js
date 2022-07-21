var express = require ('express');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('base route!');
  res.sendStatus(200);
});



module.exports = app;

