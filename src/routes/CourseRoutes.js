const CourseController = require('../controllers/CourseController')

module.exports = app => {
    app.get('/courses', CourseController.index)
    app.post('/courses', CourseController.store)
    app.put('/courses/:id', CourseController.update)
    app.delete('/courses/:id', CourseController.delete)
}