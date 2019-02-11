const express = require('express');
const app = express();
const morgan = require('morgan');

const usuarioRoutes = require('./api/routes/usuarios');

app.use(morgan('dev'));

app.use('/usuarios', usuarioRoutes);

app.use((req, res, cb) => {
    const error = new Error('Not found');
    error.status = 404;
    cb(error);
});

app.use((error, req, res, cb) => {
    res.status(error.status || 500);
    res.json({
        error: {
            mensaje: error.mensaje
        }
    });
});

module.exports = app;