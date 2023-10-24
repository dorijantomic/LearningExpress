const mysql = require('mysql2');

const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   database: 'node-complete',
   password: '1a694a9ce3' 
}); // returns connections


module.exports = pool.promise();