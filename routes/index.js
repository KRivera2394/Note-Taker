const express = require('express');
const app = express();
const fbRoute = require('./fb');
app.use('/notes', fbRoute);
module.exports = app;