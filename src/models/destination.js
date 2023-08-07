const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    titre: { type: String, required: true, },
    description: { type: String, required: true, },
    localisation: { type: String, },
    image: { type: [String], },
}, { timestamps: true });

module.exports = Agence = mongoose.model('Destination', schema)