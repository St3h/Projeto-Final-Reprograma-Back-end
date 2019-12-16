const mongoose = require('mongoose');
const schema = mongoose.Schema

const comentarioSchema = new schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String},
    comentario: { type: String, required: true}
});

const comentarioModel = mongoose.model('comentários', comentarioSchema);

module.exports = {comentarioModel, comentarioSchema};