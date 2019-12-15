const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/oportunidadesController');

router.post('/criarUsuario', controller.addUsuario);


module.exports = router 