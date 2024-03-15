
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
    const time1InUTC = time1 + (timezoneoffset1 * 100);
    const time2InUTC = time2 + (timezoneoffset2 * 100);
    return Math.abs(time1InUTC - time2InUTC);
}

flights = [
    newFlight(1, "Boeing 747", "2020-01-01", 1200, "2020-01-01", 1400, "YYZ", "YYC"),
    newFlight(2, "Boeing 747", "2020-01-01", 1500, "2020-01-01", 1600, "YYC", "YVR"),
    newFlight(3, "AC-130", "2020-01-02", 0, "2020-01-02", 1500, "YVC", "YVR"),
    newFlight(4, "Boeing 737", "2020-01-01", 1200, "2020-01-01", 1400, "YYZ", "YVR"),
    newFlight(5, "Boeing 747", "2020-01-05", 300, "2020-01-05", 800, "YOO", "YYZ"),

    newFlight(6, "Boeing 747", "2020-01-10", 0, "2020-01-10", 1000, "YVR", "YVC"),
    newFlight(7, "Boeing 747", "2020-01-10", 1200, "2020-01-10", 1400, "YVC", "YYZ"),
    newFlight(8, "Boeing 747", "2020-01-10", 1100, "2020-01-10", 1800, "YVR", "YOO"),
    newFlight(9, "Boeing 747", "2020-01-11", 1700, "2020-01-12", 1800, "YVR", "YYZ"),

    newFlight(10, "United Airlines 132", "2020-01-01", 1300, "2020-01-01", 1900, "YYZ", "YVR"),
    newFlight(11, "United Airlines 189", "2020-01-01", 1215, "2020-01-01", 1415, "YYZ", "YYC"),
];

module.exports = {
    newFlight,
    calculateAirTime,
    flights
}