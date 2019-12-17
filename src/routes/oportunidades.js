const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/oportunidadesController');

router.post('', controller.addUsuario);
router.post('/organizador', controller.addOrganizador);
router.post('/admin', controller.addAdmin);
router.get('', controller.getAll);
router.patch('/:id', controller.update);
router.post('/:organizadorId/evento', controller.addEvento);
router.get('/eventos', controller.getAllEventos);
router.get('/organizador/:organizadorNome', controller.getByOrganizadorNome);
router.get('/evento/:eventoNome', controller.getByEventoNome);
router.patch('/:usuarioId/comentario/:eventoId', controller.addComentario);
// router.patch('/:organizadorId/evento/:eventoId', controller.updateEvento);
router.delete('/:id', controller.remove);
router.delete('/:organizadorId/evento/:eventoId', controller.removeEvento)

module.exports = router;