const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({

    domain: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    home: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'home',
        required: true
    },
    about:{
        type: String,
        required: true  
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contact',
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
        required: true
    },
    skills: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skills',
        required: true
    }
}, { timestamps: true });

const portfolioModel = mongoose.model('portfolio', portfolioSchema);

module.exports = portfolioModel;