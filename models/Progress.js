const mongoose = require("mongoose");

//Actions
const actionStatus = {
    values: ['PROGRESS', 'DONE', 'CANCELED'],
    message: 'Status: PROGRESS, DONE, or CANCELED'
};

const ActionSchema = mongoose.Schema({
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    name: { type: String, required: true },
    description: { type: String },
    assignees: [mongoose.Schema.Types.ObjectId],
    due_date: { type: Date },
    status: { type: String, enum: actionStatus },
    configuration: { type: mongoose.Schema.Types.Mixed }
});

const Action = mongoose.model('Action', ActionSchema);
exports.Action = Action;

//Progress
const ProgressSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }],
    streak: { type: Number },
    score: { type: Number }
});

const Progress = mongoose.model('Progress', ProgressSchema);
exports.Progress = Progress;
