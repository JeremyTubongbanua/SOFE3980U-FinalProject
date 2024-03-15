
const newFlight = (flightid, planename, departdate, departtime, arrivedate, arrivetime, sourceid, destinationid) => {
    return {
        flightid,
        planename,
        departdate,
        departtime,
        arrivedate,
        arrivetime,
        sourceid,
        destinationid
    };
}

const calculateAirTime = (time1, timezoneoffset1, time2, timezoneoffset2) => {
    const time1InUTC = time1 + (timezoneoffset1*100);
    const time2InUTC = time2 + (timezoneoffset2*100);
    return Math.abs(time1InUTC - time2InUTC);
}

flights = [
    newFlight(1, "Boeing 747", "2020-01-01", 1200, "2020-01-01", 1400, "YYZ", "YYC"),
    newFlight(2, "Boeing 747", "2020-01-01", 1500, "2020-01-01", 1600, "YYC", "YVR")
];

module.exports = {
    newFlight,
    calculateAirTime,
    flights
}