const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/oportunidadesController');

router.post('', controller.addUsuario);
router.post('/organizador', controller.addOrganizador);
router.post('/admin', controller.addAdmin);
router.post('/:organizadorId/evento', controller.addEvento);
router.get('', controller.getAll);
router.patch('/:usuarioId/comentario/:eventoId', controller.addComentario);


module.exports = router;