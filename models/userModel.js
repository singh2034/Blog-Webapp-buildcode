const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'UserName is Required']
    },

    email: {
        type: String,
        required: [true, 'Email-ID is Required']
    },

    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        },
    ],
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;