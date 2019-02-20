const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://personalbdq:admin123@ds139295.mlab.com:39295/personalbdq', {
    useNewUrlParser: true
})

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Commit inicial')
})

app.listen('3000', () => {
    console.log("Vai dar certo")
})