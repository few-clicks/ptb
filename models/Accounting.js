const mongoose = require('mongoose');

//Accounting
const AccountingSchema = new Schema({
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
    balance: { type: Number, required: true }
});

const Accounting = mongoose.model('Accounting', AccountingSchema);
exports.Accounting = Accounting;


//Transaction
const TransactionSchema = new Schema({
    created_at: { type: Date, default: Date.now, required: true },
    amount: { type: Number, required: true },
    balance: { type: Number, required: true },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
exports.Transaction = Transaction;


