// we will define the schema for crating the user in the database

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }

    // timestamps is a tool provided by the mongoose to provide features of when the user is created/updated.
}, {
    
    timestamps: true
});

// telling the mongoose that it is a model.

const User = mongoose.model('User', userSchema);

module.exports = User;