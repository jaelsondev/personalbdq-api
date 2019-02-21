const FolderController = require('../controllers/FolderController')

module.exports = app => {
    app.get('/folders', FolderController.index)
    app.post('/folders', FolderController.store)
    app.put('/folders/:id', FolderController.update)
    app.delete('/folders/:id', FolderController.delete)
}