const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const { oportunidadesSchema} = require('./oportunidadesSchema');

const usuarioSchema = new Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String, required: true, unique: true},
    foto: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    senha: { type: String, required: true},
    oportunidades: [oportunidadesSchema],
    grupo: { type: String}
});

const organizadorCollection = mongoose.model('organizador', usuarioSchema)

module.exports = organizadorCollection