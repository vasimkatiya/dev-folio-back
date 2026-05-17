const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });

const homeModel = mongoose.model('home', homeSchema);

module.exports = homeModel;