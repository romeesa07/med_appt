const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['patient', 'doctor', 'admin'],
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);