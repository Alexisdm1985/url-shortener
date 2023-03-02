const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    origin: {
        type: String,
        unique: true,
        required: true,
    },
    shortUrl: {
        type: String,
        unique: true,
        required: true,
    }
}); 

module.exports = mongoose.model('Url', urlSchema);