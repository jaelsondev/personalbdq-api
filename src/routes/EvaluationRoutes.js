const EvaluationController = require('../controllers/EvaluationController')

module.exports = app => {
    app.get('/evaluations', EvaluationController.index)
    app.post('/evaluations', EvaluationController.store)
    app.put('/evaluations/:id', EvaluationController.update)
    app.delete('/evaluations/:id', EvaluationController.delete)
}