'use strict';

const { NODE_ENV, PORT } = process.env;
const nodeEnv = (NODE_ENV !== undefined ? NODE_ENV : 'development');

module.exports = {
  nodeEnv,
  logLevel: nodeEnv === 'development' ? 'debug' : 'info',
  port: PORT || 8080,
  mongoConf: {
    url: 'mongodb+srv://admin:admin@postal-fox.0wqfj.mongodb.net/postal-fox',
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }
  }
};
