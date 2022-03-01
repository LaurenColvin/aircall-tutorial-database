const mongoose = require('../connection')

const vinylSchema = new mongoose.Schema({
    artist: String,
    album: String 
})

module.exports = mongoose.model('Vinyl', vinylSchema)