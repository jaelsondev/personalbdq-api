const mongoose = require('mongoose')

const EvaluationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    categoryEvaluation: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Evaluation', EvaluationSchema)