const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/oportunidadesController');

router.post('', controller.addUsuario);
router.post('/organizador', controller.addOrganizador);
router.post('/admin', controller.addAdmin);


module.exports = router;