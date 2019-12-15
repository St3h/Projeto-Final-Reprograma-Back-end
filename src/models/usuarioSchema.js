const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const { oportunidadeSchema } = require('./oportunidadeSchema');
const { comentarioSchema } = require ('./comentarioSchema');

const usuarioSchema = new schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String, required: true, unique: true},
    foto: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    senha: { type: String, required: true},
    comentarios: [comentarioSchema],
    oportunidades: [oportunidadeSchema],
    grupo: { type: String}
});

const usuarioModel = mongoose.model('usuário', usuarioSchema)

module.exports = {usuarioModel, usuarioSchema};