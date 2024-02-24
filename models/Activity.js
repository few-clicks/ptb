const mongoose = require('mongoose');

const Action = mongoose.Schema({
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    created_at: "",
});
