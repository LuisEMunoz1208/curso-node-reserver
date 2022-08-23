const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath= '/api/usuarios';

    //Middlewares
    this.middelweres();
    //Rutas de mi aplicacion
    this.routes();
  }

  middelweres() {
    //CORS  
    this.app.use(cors());
    //Parseo y Lectura del body
    this.app.use(express.json());
    //dDirectirio publico
    this.app.use(express.static("public"));
  }

  routes() {

    this.app.use(this.usuariosPath, require('../routes/user'));
   
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto ", this.port);
    });
  }
}

module.exports = Server;
