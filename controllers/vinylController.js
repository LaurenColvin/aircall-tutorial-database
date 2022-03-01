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

router.get('/:id', (req,res) => {
    Vinyl.findById(req.params.id)
        .then((vinyl =>
            res.json ({
                status: 200,
                vinyl: vinyl
            })
        ))
})

router.delete('/:id', (req,res) => {
    Vinyl.findByIdAndDelete(req.params.id)
        .then((vinyl =>
            res.json ({
                status: 200,
                vinyl: vinyl,
                msg: 'item deleted'
            })
        ))
})


module.exports = router;
