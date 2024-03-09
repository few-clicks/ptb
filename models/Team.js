const mongoose = require("mongoose");

//Member
const memberRole = ['LEAD', 'BACKEND', 'FRONTEND'];

const memberSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, enum: memberRole, required: true }
});

//Team

const TeamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: [memberSchema],
    configuration: { type: Schema.Types.Mixed }
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;


