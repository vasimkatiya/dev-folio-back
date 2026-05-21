const monogoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
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