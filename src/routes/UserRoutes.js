const UserController = require('../controllers/UserController')

module.exports = app => {
    app.get('/users', UserController.index)
    app.post('/users', UserController.store)
    app.put('/users/:id', UserController.update)
    app.delete('/users/:id', UserController.delete)
}