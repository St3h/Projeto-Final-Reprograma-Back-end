const {usuarioModel} = require('../models/usuarioSchema');
const { oportunidadeModel } = require('../models/oportunidadeSchema');
const comentarioModel= require('../models/comentarioSchema');

const addUsuario = (request, response) => {
    request.body.grupo = 'comum';
    const novoUsuario = new usuarioModel(request.body);

    novoUsuario.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(201).send(novoUsuario)
    })
};

const addOrganizador = (request, response) => {
    request.body.grupo = 'organizador';
    const novoUsuario = new usuarioModel(request.body);

    novoUsuario.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(201).send(novoUsuario)
    })
};


const addAdmin = (request, response) => {
    request.body.grupo = 'admin';
    const novoUsuario = new usuarioModel(request.body);

    novoUsuario.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(201).send(novoUsuario)
    })

};

const addEvento =  async (request, response) => {
    const organizadorId = request.params.organizadorId;
    const evento = request.body;
    const options = { new: true };

    const novoEvento = new oportunidadeModel(evento);
    const organizador = await usuarioModel.findById(organizadorId);

    organizador.oportunidades.push(novoEvento);
    organizador.save((error) => {
        if (error){
            return response.status(500).send(error)
        }
            return response.status(201).send(organizador)
    })
};

module.exports = {
    addUsuario,
    addOrganizador,
    addAdmin,
    addEvento
}