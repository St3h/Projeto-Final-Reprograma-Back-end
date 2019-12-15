const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const { comentarioSchema} = require ('./comentarioSchema');

const oportunidadesSchema = new Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String, required: true},
    foto: { type: String, required: true},
    descricao: { type: String, required: true},
    dataInicio: { type: Date, required: true},
    dataFim: { type: Date},
    periodo: { type: String},
    horario: { type: String, required: true},
    preco: { type: Number, required: true},
    localizacao: { type: String, required: true},
    link: { type: String},
    comentario: [comentarioSchema]
}) 

const oportunidadesCollection = mongoose.model('oportunidades', comentarioSchema);

module.exports = oportunidadesCollection;