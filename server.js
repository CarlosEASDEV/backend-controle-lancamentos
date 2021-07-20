var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

  var cors = require('cors');

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  
  var routes = require('./api/routes/controleLancamentoRoutes'); //importing route
  routes(app);

app.listen(port);

console.log('Controle de Lançamentos API : ' + port);


