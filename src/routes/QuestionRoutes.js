const QuestionController = require('../controllers/QuestionController')

module.exports = app => {
    app.get('/questions', QuestionController.index)
    app.post('/questions', QuestionController.store)
    app.put('/questions/:id', QuestionController.update)
    app.delete('/questions/:id', QuestionController.delete)
}