// biblioteca js que faz o mapeamento das pastas em função do server.js
require('rootpath')(); 
// Inicialização do express. 
var express = require('express');
// bibloteca que ajuda no parse de mensagens requisitadas que contém JSON
var bodyParser = require('body-parser');

// Criação da API e indicação que trabalha com JSON
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('app'));

// Porta fixa
var appPort = 7000;

// start server API
var serverAPI = app.listen(appPort, function () {
    console.log('Server APP listening at http://' + 
    serverAPI.address().address + ':' + 
    serverAPI.address().port);
});