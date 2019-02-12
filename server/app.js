const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usuarioRoutes = require('./api/routes/usuarios');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, cb) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    cb();
});

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