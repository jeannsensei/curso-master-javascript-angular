'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Hola mundo desde mi API de NodeJS</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    );
});

// exportar 
module.exports = app;