require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()
app.use(logger('dev'));
app.use(cors())

app.get('/', function (req, res) {
    res.send('hello earth!')
})

app.listen(PORT, () => {
    console.log('Listening in on port:' + PORT)
})