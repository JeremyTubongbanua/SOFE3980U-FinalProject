const {flights} = require('./Flight');
const {getOffset, calculateAirTime} = require('./TimeUtils');

const generateReceipt = (name, email, departureflightids, returnflightids) => {
    let totaldepartflighttime = 0;
    let totalreturnflighttime = 0;
    let transactionid = Math.floor(Math.random() * 1000000000);

    flights.forEach(flight => {
        if (departureflightids.includes(flight.flightid)) {
            totaldepartflighttime += calculateAirTime(flight.departtime, getOffset(flight.sourceid), flight.arrivetime, getOffset(flight.destinationid));
        }
        if (returnflightids.includes(flight.flightid)) {
            totalreturnflighttime += calculateAirTime(flight.departtime, getOffset(flight.sourceid), flight.arrivetime, getOffset(flight.destinationid));
        }
    });

    return { name, email, totaldepartflighttime, departureflightids, returnflightids, totalreturnflighttime, transactionid };

}

module.exports = { generateReceipt };