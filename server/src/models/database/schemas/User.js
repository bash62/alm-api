const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
    },
    discordTag : {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now 
    },
    passageId: {
        type: Array,
        required: true,
        default: [],
    },
    feedBackId: {
        type: Array,
        required: true,
        default: [],
    },
    ordersId: {
        type: Array,
        required: true,
        default: [],
    },




})


module.exports = mongoose.model('User', UserSchema); 