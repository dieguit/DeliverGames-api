/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const GraphHTTP = require('express-graphql');
const cors = require('cors');

/**
 * server configuration
 */
const config = require('../config/');
const auth = require('./policies/auth.policy');
const dbService = require('./services/db.service');
const Schema = require('./controllers/');

// environment: development, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const api = express();
const server = http.Server(api);
const mappedRoutes = mapRoutes(config.publicRoutes, 'api/controllers/Auth/');
const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to allow only requests from certain origins
api.use(cors());

// secure express app
api.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// public REST API
api.use('/rest', mappedRoutes);

// private GraphQL API
api.get('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));
api.post('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  console.log(`API listening on port ${config.port}`);
  return DB;
});
