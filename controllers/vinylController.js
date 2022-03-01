const express = require('express')
const Vinyl = require('../models/Vinyl.js')

const router = express.Router();

router.get('/', (req,res) => {
    res.send('hello from vinyls!')
})

module.exports = router;
