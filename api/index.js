const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api/', routes);

module.exports = app