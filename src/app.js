const {connect} = require ('./models/repository');
const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const index = require ('./routes/index');
// const oportunidades = require ('./routes/oportunidades');

connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', index);
// app.use('/oportunidades', oportunidades);

module.exports = app;