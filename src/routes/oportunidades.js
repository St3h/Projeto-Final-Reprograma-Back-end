const express = require ('express');
const router = express.Router();

const controller = require ('../controllers/oportunidadesController');

router.post('', controller.addUsuario);

module.exports = router 