const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    skills: {
        type: [String],
        required: true
    }

}, { timestamps: true });

const skillsModel = mongoose.model('skills', skillsSchema);

module.exports = skillsModel;