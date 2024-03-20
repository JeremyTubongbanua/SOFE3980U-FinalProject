const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const { getPaths } = require('./Options');
const { flights, getFlight, calculateAirTimeFlights } = require('./Flight');

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

app.get('/generateoptions', (req, res) => {
    const query = req.query;
    const source = query.source; // e.g YYZ
    const destination = query.destination; // e.g. YYC
    const numberofstops = query.numberofstops; // e.g. 1
    const departuredate = query.departuredate; // e.g. 2021-05-01
    const returndate = query.returndate; // e.g. 2021-05-01
    // check if all parameters are present
    if (!source || !destination || !numberofstops || !departuredate || !returndate) {
        res.status(400).send('Missing parameters: source: ' + source + ', destination: ' + destination + ', numberofstops: ' + numberofstops + ', departuredate: ' + departuredate + ', returndate: ' + returndate);
        return;
    }
    console.log('Source: ' + source + ', Destination: ' + destination + ', Number of stops: ' + numberofstops + ', Departure date: ' + departuredate + ', Return date: ' + returndate);
    const departPaths = getPaths(flights, source, destination, parseInt(numberofstops), departuredate, departuredate);
    console.log('getPaths(' + destination + ', ' + source + ', ' + numberofstops + ', ' + returndate + ', ' + returndate + ')');
    const returnPaths = getPaths(flights, destination, source, parseInt(numberofstops), returndate, returndate);
    console.log('Departure paths: ' + departPaths.length);
    console.log('Return paths: ' + returnPaths.length);
    res.status(200).send({ status: 'success', data: {departPaths, returnPaths} });
});

app.get('/generatereceipt', (req, res) => {
    const query = req.query;
    let departureflightids = query.departureflightids;
    let returnflightids = query.returnflightids;
    const name = query.name;
    const email = query.email;
    // check if all parameters are present
    if(!departureflightids || !returnflightids || !name || !email) {
        res.status(400).send('Missing parameters: departureflightids: ' + departureflightids + ', returnflightids: ' + returnflightids + ', name: ' + name + ', email: ' + email);
        return;
    }

    departureflightids = JSON.parse(departureflightids);
    if(returnflightids != 'null') {
        returnflightids = JSON.parse(returnflightids);
    }

    console.log('Departure flight ids: ' + departureflightids);
    console.log('Return flight ids: ' + returnflightids);

    deptflights = [];
    for (let i = 0; i < departureflightids.length; i++) {
        deptflights.push(getFlight(departureflightids[i]));
    }

    returnflights = [];
    if(returnflightids != 'null') {
        for (let i = 0; i < returnflightids.length; i++) {
            returnflights.push(getFlight(returnflightids[i]));
        }
    }



    let obj = {
        status: 'success',
        data: {
            name,
            email,
            departureflights: {
                flights: deptflights,
                totalairtime: calculateAirTimeFlights(deptflights),
            },
            returnflights: returnflightids != null ? {
                flights: returnflights,
                totalairtime: calculateAirTimeFlights(returnflights),
            } : null,
            totalairtime: calculateAirTimeFlights(deptflights) + (returnflightids != null ? calculateAirTimeFlights(returnflights) : 0),
        }
    }

    res.status(200).send(obj);  

});

const server = app.listen(3001, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`API listening at http://${host}:${port}`);
});