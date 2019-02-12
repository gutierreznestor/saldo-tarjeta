const mysql = require('mysql');

const urlHost = 'localhost';

const pool = mysql.createPool({
    host: urlHost,
    user: 'root',
    password: '',
    database: 'saldotarjeta',
    multipleStatements: true
});

pool.getConnection((error) => {
    if(error) {
        console.log(error);        
    } else {
        console.log('db connected');
    }
});

module.exports = pool;