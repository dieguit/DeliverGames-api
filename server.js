'use strict';
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT;

// server
const server = express();

server.use(bodyParser.json());

// API summary
const router = require('./routes/main')
server.use('/', router)

// Pizza Boy
const pizzaBoyRouter = require('./routes/pizzaboy')
server.use('/pizzaboy', pizzaBoyRouter)

// Start
server.listen(port);
console.log(`Deliver Games API running on http://localhost:${port}`);

module.exports = server;
