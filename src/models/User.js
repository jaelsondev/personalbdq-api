const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    registration: {
        type: String,
        required: true,
        index: { 
            unique: true 
        }
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { 
            unique: true 
        }
    },
    password: {
        type: String,
        required: true
    },
    accessLevel: {
        type: String,
        enum: ['User', 'Administrator'],
        default: 'User'
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
    
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)