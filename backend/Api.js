const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database: ' + process.env.DB_DATABASE + ' as ' + process.env.DB_USER + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT);
    }
});

app.get('/generateflights', (req, res) => {
    // TODO
});

const server = app.listen(3001, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});