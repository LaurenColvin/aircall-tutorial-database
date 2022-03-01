require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const vinylController = require ('./controllers/vinylController.js')

const PORT = process.env.PORT

const app = express()
app.use(logger('dev'));
app.use(cors())

app.use('/vinyls', vinylController)

app.get('/', function (req, res) {
    res.send('hello earth!')
})

app.listen(PORT, () => {
    console.log('Listening in on port:' + PORT)
})