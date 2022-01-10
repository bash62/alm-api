const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discord: { 
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
    },
    discordId: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now 
    },
    userRegisterState: {
        stage: {
            type: Number,
            required: true,
            default: 0,
            max: 4,
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    userState: {
        aliveOrder: {
            type: Number,
            required: true,
            default: 0,
        },
        currentOrderId: {
            type: Array,
            required: true,
            default: [],
        },
        isPaidUser: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    ingame: {
        username: {
            type: String,
            required: false,
            default: "",
        },
        profile: {
            type: String,
            required: false,
            default: "",
        },
        serveur: {
            type: Array,
            required: false,
            default: [],
        } 
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