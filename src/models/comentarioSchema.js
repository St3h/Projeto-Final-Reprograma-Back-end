const mongoose = require('mongoose');
const schema = mongoose.Schema

const comentarioSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String, required: true},
    comentario: { type: String, required: true}
});

const comentarioCollection = mongoose.model('comentários', comentarioSchema);

module.exports = comentarioCollection