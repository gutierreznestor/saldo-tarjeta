const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        mensaje: 'GET requests to /usuarios'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        mensaje: 'POST requests to /usuarios'
    });
});

module.exports = router;