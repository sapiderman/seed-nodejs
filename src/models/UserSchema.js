const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            first: String,
            last: String
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            index: { unique: true },
        },
        gender: { type: String, lowercase: true, enum: ['male', 'female'] },
        phone: String,
        description: String
    }
)

module.exports = mongoose.model('User', userSchema);