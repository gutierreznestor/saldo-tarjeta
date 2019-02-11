const express = require('express');
const app = express();

const usuarioRoutes = require('./api/routes/usuarios');

app.use('/usuarios', usuarioRoutes);

module.exports = app;