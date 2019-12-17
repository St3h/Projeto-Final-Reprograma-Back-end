const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/OportunidadesApi';

const connect = () => {
  mongoose.connect(MONGO_URL, { 
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser: true })
  const connection = mongoose.connection
  connection.on('error', () => console.error('Erro ao conectar no mongoDB'))
  
  connection.once('open', () => console.log('Conectado ao mongoDB'))
}

module.exports = { connect };