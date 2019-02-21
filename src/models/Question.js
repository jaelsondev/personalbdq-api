const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    statement: {
        type: String,
        required: true
    },
    typeQuestion: {
        type: String,
        required: true
    },
    categoryQuestion: {
        type: String,
        required: true
    },
    dificultyQuestion: {
        type: String,
        required: true
    },
    keyWords: {
        type: Array,
        required: true
    },
    alternatives: [{
        statement: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            default: false
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Question', QuestionSchema)