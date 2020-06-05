const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    nome: {type: String, required: true, max: 100},
    marca: {type: String, required: true},
});

module.exports = mongoose.model('Smartphone', schema);