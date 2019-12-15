const {usuarioModel} = require('../models/usuarioSchema');
const oportunidadeModel = require('../models/oportunidadeSchema');
const comentarioModel= require('../models/comentarioSchema');

const addUsuario = (request, response) => {
    const novoUsuario = new usuarioModel(request.body);

    novoUsuario.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(201).send(novoUsuario)
    })
}

module.exports = {
    addUsuario,
    
}