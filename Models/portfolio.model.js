const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({

    home:{
        type:String,
        required:true
    },
    about:{
        type: String,
        required: true  
    },
    contact: {
        type:String,
        required:true
    },
    project: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    }
}, { timestamps: true });

const portfolioModel = mongoose.model('portfolio', portfolioSchema);

module.exports = portfolioModel;