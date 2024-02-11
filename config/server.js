// Fazendo os requires dos módulos necessários
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Iniciando o Express
var app = express();

// Definindo a engine de views utilizando EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Trata os dados enviados http
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// Unificando a inicialização de rotas com Consign
consign().include('app/routes')
    .then('config/dbConnection.js') // Iniciando a conexão com o BD automaticamente
    .then('app/models') // Iniciando os models
    .then('app/controllers') // Iniciando os controllers
    .into(app);

module.exports = app;