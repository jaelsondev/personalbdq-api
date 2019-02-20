const CourseController = require('../controllers/CourseController')

module.exports = app => {
    app.get('/course', CourseController.index)
    app.post('/course', CourseController.store)
    app.put('/course/:id', CourseController.update)
    app.delete('/course/:id', CourseController.delete)
}