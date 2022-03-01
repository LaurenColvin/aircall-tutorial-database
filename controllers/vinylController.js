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

router.post("/", (req, res) => {
    const data = req.body 
    Vinyl.create(data)
        .then((vinyl) => res.json({
            status: 200,
            vinyl: vinyl
        }))
})

module.exports = router;
