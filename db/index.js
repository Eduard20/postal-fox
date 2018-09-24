/**
 * Module Dependencies
 */

const mongoose = require('mongoose');
const config = require('../config');
const log = require('../logger');
mongoose.Promise = Promise;
const {TrackingModel} = require('./models');

/**
 * MongoDB Default Connection
 */

const connectMongo = () => {
    mongoose.connect(config.mongoConf.url, config.mongoConf.options);
};

connectMongo();

mongoose.connection.on('connected', () => {
    log.info('Connected to MongoDB');
});
mongoose.connection.on('error', err => {
    log.error(err);
    setTimeout(connectMongo, 5000);
});

module.exports = {
    getTrackingByCode: code => {
        return TrackingModel.findOne({code});
    }
};

