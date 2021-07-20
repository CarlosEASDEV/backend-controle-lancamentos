'use strict';
module.exports = function(app) {
  var lancamentos = require('../controllers/controleLancamentoController');

  // todoList Routes
  app.route('/lancamentos')
    .get(lancamentos.carrega_lancamentos)
    //.post(lancamentos.cria_lancamento);


  app.route('/lancamentos/:taskId')
    //.get(lancamentos.get_lancamento)
    //.put(lancamentos.update_lancamento)
    //.delete(lancamentos.delete_lancamento);
};