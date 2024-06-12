var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

//setar variaveis do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar os middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true})); //esse middleware permite recuperar dados de requisicoes POST atraves da propriedade body
app.use(expressValidator());

//Autoload das rotas, modelos e controladores dentro do objeto 'app';
consign()
    .include('app/routes')
    .include('app/models')
    .include('app/controllers')
    .into(app);

module.exports = app;
