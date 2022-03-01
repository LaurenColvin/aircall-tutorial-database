const express = require('express')
const Vinyl = require('../models/Vinyl.js')

const router = express.Router();

router.get('/', (req,res) => {
    Vinyl.find()
        .then((vinyls =>
            res.json ({
                status: 200,
                vinyls: vinyls
            })
        ))
})

module.exports = router;
