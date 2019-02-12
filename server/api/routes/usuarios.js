const express = require('express');
const router = express.Router();
const mysql = require('../../mysql/index');

router.get('/', (req, res, next) => {
    mysql.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);            
        }
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        mensaje: 'POST requests to /usuarios'
    });
});

module.exports = router;