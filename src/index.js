const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://personalbdq:admin123@ds139295.mlab.com:39295/personalbdq', {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(express.json())

//Routes
require('./routes')(app)


app.listen('3000', () => {
    console.log("Vai dar certo")
})