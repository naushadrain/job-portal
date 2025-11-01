const mongoose = require('mongoose');
const express = require('express');
const e = require('express');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['users', 'company', 'admin'],
        default: 'users'
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;
