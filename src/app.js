const express = require ('express');
const cros = require ('cros');
const bodyParser = require ('body-parser');
const index = require ('./routes/index');
const oportunidades = require ('./routes/oportunidades');

const app = express();

app.use(cros());
app.use(bodyParser.json());

app.use('/', index);
app.use('/oportunidades', oportunidades);

module.exports = app;