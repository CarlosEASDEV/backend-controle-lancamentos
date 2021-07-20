'use strict';
const fs = require('fs');

exports.carrega_lancamentos = function(req, res) {
    var lancamentos = null;
  try{

        lancamentos = getJSONLancamentos();
        res.json(lancamentos);
    }catch(erro){
        console.log('Erro ao carregar lançamentos : '+erro);
        res.send(erro);
    }
  
};



function getJSONLancamentos(){
        
    let rawdata = fs.readFileSync('lancamento-conta-legado.json');
    var lancamentos = JSON.parse(rawdata);
    console.log(lancamentos);
    return lancamentos;
      
}