/**
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/models/capsule.js
 * License: MIT (see LICENSE)
*/

const mongoose = require("mongoose");

const capsuleSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    recipient: {
        name: {
            type: String,
            required: true,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            maxLength: 254 // Standard max length for email addresses as per RFC 5321
        }
    },
    message: {
        type: String,
        required: true,
        maxLength: 5000
    },
    media: [{
        filename: String,
        path: String,
        contentType: String
    }],
    unlockDate: {
        type: Date,
        required: true
    },
    isEncrypted: {
        type: Boolean,
        default: false
    },
    encryption: {
        msg: {
            type: String,
            required: false
        },
        media: {
            type: String,
            required: false
        },
        algorithm: {
            type: String,
            default: "AES-256-CBC"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    opened: {
        type: Boolean,
        default: false
    }
});

const Capsule = mongoose.model("Capsule", capsuleSchema);
module.exports = Capsule;