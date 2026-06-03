const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    }
}, { timestamps: true });

const contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel;