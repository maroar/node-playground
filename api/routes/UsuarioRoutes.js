'use strict';
module.exports = function(app) {
  var usuarioController = require('../controllers/UsuarioController');

  app.route('/usuarios')
    .get(usuarioController.list_all)
    .post(usuarioController.create);


  app.route('/usuarios/:usuarioId')
    .get(usuarioController.read)
    .put(usuarioController.update)
    .delete(usuarioController.delete);
};

