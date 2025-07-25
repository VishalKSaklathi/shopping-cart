require('dotenv').config();
// backend/db.js
const mysql = require('mysql2');
const util = require('util');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true
    }
});
db.query = util.promisify(db.query);
// db.connect(err => {
//     if (err) {
//         console.error(' DB connection error:', err.message);
//         return;
//     }
//     console.log('Connected to MySQL DB');
// });

module.exports = db;