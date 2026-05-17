const monogoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
}, { timestamps: true });

const aboutModel = mongoose.model('about', aboutSchema);

module.exports = aboutModel;