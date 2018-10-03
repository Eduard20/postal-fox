'use strict';

/**
 * Module Dependencies
 */

const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const log = require('./logger');
const config = require('./config');
const { api } = require('./routes');
require('./db');

/**
 * Other Middleware
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use((req, res, next) => {
  if (req.headers[ 'access-control-request-headers' ]) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', req.headers[ 'access-control-request-headers' ]);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
});

/**
 * Routes
 */

app.use('/api', api);

/**
 * Middleware For Not Found
 */

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Production error handler
 */

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message, error: err });
});

/**
 * Application listening on PORT
 */

app.listen(config.port, log.info(`Node.js server is running at http://localhost:${config.port} in ${config.nodeEnv} mode with process id ${process.pid}`));
