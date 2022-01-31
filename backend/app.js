const express = require('express');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app;