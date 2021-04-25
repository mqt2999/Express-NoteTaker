const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http');
const paths = require('./paths/html.js');

var PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

require("./paths/html.js")(app);
require("./paths/api.js")(app);


// Starts our server.
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`)
});