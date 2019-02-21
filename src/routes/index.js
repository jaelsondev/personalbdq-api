module.exports = app => {
    require('./CourseRoutes')(app),
    require('./UserRoutes')(app)
    require('./FolderRoutes')(app)
    require('./QuestionRoutes')(app)
    require('./EvaluationRoutes')(app)
}