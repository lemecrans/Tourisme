const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    designation: { type: String, required: true, },
    email: { type: String, required: true, },
    password: { type: String, required: true, },
    contact: { type: String, },
    descriptionAgence: { type: String, required: true, },
    Site: { type: String, required: true, },
    image: { type: String, },
}, { timestamps: true });

module.exports = Agence = mongoose.model('Agence', schema)