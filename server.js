'use strict';
require('./config/config');

//const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const port = process.env.PORT;

// App
const app = express();
app.use(bodyParser.json());

// Routes
require('./controllers/routes')(app);

// Start
app.listen(PORT, HOST);
console.log(`Deliver Games API running on http://${HOST}:${PORT}`);
