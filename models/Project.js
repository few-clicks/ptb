const mongoose = require('mongoose');

//Project
const ProjectSchema = mongoose.Schema({
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    name: { type: String, required: true },
    description: { type: String },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    configuration: { type: mongoose.Schema.Types.Mixed }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
