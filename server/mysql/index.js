const mysql = require('mysql');

const urlHost = 'localhost';

const mysqlConnection = mysql.createConnection({
    host: urlHost,
    user: 'root',
    password: '',
    database: 'saldotarjeta'
});

mysqlConnection.connect((error) => {
    if(error) {
        console.log(error);        
    } else {
        console.log('db connected');
    }
});

module.exports = mysqlConnection;