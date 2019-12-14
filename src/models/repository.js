const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/OportunidadesApi';

function conect() {
    mongoose.conect(MONGO_URL,
        { useNewUrlParser: true },
        function (error) {
          if(error) {
            console.error("Ocorreu um erro: ", error)
          } else {
            console.log("Conectado ao mongoDB.")
          }
        }
     );
}

module.export = { conect };