'use strict';
require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const port = process.env.PORT;

// server
const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send("testasd");
});

// Start
server.listen(port);
console.log(`Deliver Games API running on http://localhost:${port}`);

module.exports = {server};

// Add Routes
require('./controllers/routes');
