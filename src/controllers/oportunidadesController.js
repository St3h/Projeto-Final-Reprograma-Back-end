const { usuarioModel } = require('../models/usuarioSchema');
const { oportunidadeModel } = require('../models/oportunidadeSchema');
const { comentarioModel }= require('../models/comentarioSchema');

// const eventoBody = async (evento, eventoId, organizadorId) => {
//     const organizador =  await usuarioModel.findById(organizadorId)
//     const eventoSalvo = organizador.oportunidades.find((oportunidade) => {
//      oportunidade._id == eventoId
//     })
//     evento.nome = evento.nome || eventoSalvo.nome
//     evento.foto = evento.foto || eventoSalvo.foto

//     return evento
// }

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
    });
};

const getAll = (request, response) => {
    usuarios = usuarioModel.find((error, eventos) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(200).send(eventos)
    });
};

// const update = (request, response) => {
//     const id = request.params.id;
//     const options = { new: true};

//     usuarioModel.findOneAndUpdate(
//         {_id: id},
//         {
//              $set: { request.body
//             }
//         },
//         options,
//         (error, usuario) => {
//             if(error){
//                 return response.status(500).send(error)
//             }
//                 return response.status(201).send(usuario)
//         }
//     )
// };

const addEvento =  async (request, response) => {
    const organizadorId = request.params.organizadorId;
    const evento = request.body;
    const options = { new: true };

    const organizador = await usuarioModel.findById(organizadorId);
    request.body.organizador = organizador.nome

    const novoEvento = new oportunidadeModel(evento);
    
    organizador.oportunidades.push(novoEvento);

    novoEvento.save((error) =>{
        if (error){
            return response.status(500).send(error)
        }
    });

    organizador.save((error) => {
        if (error){
            return response.status(500).send(error)
        }
            return response.status(201).send(organizador)
    });
};

const getAllEventos = (request, response) => {
    eventos = oportunidadeModel.find((error, eventos) =>{
        if(error){
            return response.status(500).send(error)
        }
            return response.status(200).send(eventos)
    });
};

const getByOrganizadorNome = (request, response) => {
    const organizadorNome = request.params.organizadorNome;
    const regex = new RegExp (organizadorNome, 'i');
    const filtro = { organizador: regex };

    oportunidadeModel.find(filtro, (error, eventos) => {
        if(error){
            return response.status(500).send(error)
        }else{
            if(eventos.length > 0){
                return response.status(200).send(eventos)
            }
                return response.status(404).send('Evento não encontrado')
        }
    })
};

const getByEventoNome  = (request, response) => {
    const eventoNome = request.params.eventoNome
    const regex = new RegExp (eventoNome, 'i');
    const filtro = { nome: regex };
    
    oportunidadeModel.find(filtro, (error, eventos) => {
        if (error){
            return response.status(500).send(error)
        }else{
            if(eventos.length > 0){
                return response.status(200).send(eventos)
            }
            return response.status(404).send('Evento não encontrado')
        }
    })
};

const addComentario = async (request, response) => {
    const usuarioId = request.params.usuarioId;
    const eventoId = request.params.eventoId;
    const comentario = request.body;
    const options = { new: true};

    const usuario = await usuarioModel.findById(usuarioId);
    request.body.nome = usuario.nome;
    const evento = await oportunidadeModel.findById(eventoId);
    
    const novoComentario = new comentarioModel(comentario);
    
    usuario.comentarios.push(novoComentario);
    evento.comentarios.push(novoComentario);
    
    usuario.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
    });

    evento.save((error) => {
        if(error){
            return response.status(500).send(error)
        }
            return response.status(201).send(evento)
    });
};

// const upDateEvento = async (request, response) => {
//     const organizadorId = request.params.organizadorId;
//     const eventoId = request.params.eventoId;
//     const eventoNovo = request.body;
//     const options = { new: true };

//     const eventoUpdate = eventoBody(eventoNovo, eventoId, organizadorId)

//     usuarioModel.findOneAndUpdate(
//         { _id: organizadorId, 'oportunidades._id': eventoId },
//         {
//             $set: {'oportunidades.$': eventoUpdate}
//         },
//         options,
//         (error, organizador) => {
//             if(error){
//                 return response.status(500).send(error)
//             }
//             if (organizador){
//                 return response.status(200).send(organizador)
//             }
//                 return response.status(404).send('Organizador não encontrado')
//         }        
//     );
// };


const remove = (request, response) => {
    const id = request.params.id

    usuarioModel.findByIdAndDelete(id, (error, usuario) => {
        if(error){
            return response.status(500).send(error)
        }
        if(usuario){
            return response.status(200).send('Usuário removido')
        }
            return response.status(404).send('Usuário não encontrado')       
    })
};


module.exports = {
    addUsuario,
    addOrganizador,
    addAdmin,
    getAll,
    // update,
    addEvento,
    getAllEventos,
    getByOrganizadorNome,
    getByEventoNome,
    addComentario,
    // upDateEvento,
    remove
}