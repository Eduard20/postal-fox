'use strict';

const { NODE_ENV, PORT } = process.env;
const nodeEnv = (NODE_ENV !== undefined ? NODE_ENV : 'development');

module.exports = {
  nodeEnv,
  logLevel: nodeEnv === 'development' ? 'debug' : 'info',
  port: PORT || 8080,
    mongoConf: {
        url: 'mongodb://ds213513.mlab.com:13513/postal-fox',
        options: {
            db: { native_parser: true },
            server: { poolSize: 5 },
            user: 'admin',
            pass: 'admin2018'
        }
    }
};
