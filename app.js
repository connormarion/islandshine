const express = require('express');
const routes = require('./routes/index');

const app = express();
app.set('view engine', 'ejs')
app.use('/', routes)
app.use('/public/', express.static('public/'))

module.exports = app;