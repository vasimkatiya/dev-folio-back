const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    github_link: {
        type: String,
        required: true
    },
}, { timestamps: true });

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;