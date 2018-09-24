
const mongoose = require('mongoose');
const {Schema} = mongoose;

const TrackingSchema = new Schema({

}, {
    versionKey: false,
    strict: false
});

const TrackingModel = mongoose.model('Tracking', TrackingSchema, 'trackings');

module.exports = {
    TrackingModel
};
