const express = require('express');
const router = express.Router();
const mysql = require('../../mysql/index');

router.get('/', (req, res, cb) => {
    mysql.query('SELECT * FROM usuarios', (err, rows) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);            
        }
    });
});

router.post('/add', (req, res, cb) => {
    const data = req.body;
    mysql.query('INSERT INTO usuarios SET ?', [data], (err, resultado) => {
        if(err) {
            res.status(400).send({
                mensaje: err.message
            });
        } else {
            res.status(201).json({
                mensaje: 'El usuario se insertó correctamente',
                resultado: resultado.insertId
            });
        }
    });
});

module.exports = router;