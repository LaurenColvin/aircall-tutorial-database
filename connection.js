const mongoose = require('mongoose')
let mongoUrl = ""
if (process.env.NODE_ENV==="production") {
    mongoUrl = process.env.DB_URL;
} else {
    mongoUrl = "mongodb://127.0.0.1/vinyl-api"
}

mongoose.connect(mongoUrl)
// mongoose.connect("mongodb://localhost/vinyl-api")

module.exports = mongoose