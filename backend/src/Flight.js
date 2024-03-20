
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

let i = 0;

flights = [
    newFlight(1, "Boeing 747", "2020-01-01", 500, "2020-01-01", 1400, "YYZ", "YYC"),
    newFlight(2, "Boeing 747", "2020-01-01", 1500, "2020-01-01", 1600, "YYC", "YVR"),
    newFlight(3, "AC-130", "2020-01-02", 0, "2020-01-02", 1500, "YYC", "YVR"),
    newFlight(4, "Boeing 737", "2020-01-01", 1200, "2020-01-01", 1400, "YYZ", "YVR"),
    newFlight(5, "Boeing 747", "2020-01-05", 300, "2020-01-05", 800, "YOO", "YYZ"),

    newFlight(6, "Boeing 747", "2020-01-10", 0, "2020-01-10", 1000, "YVR", "YYC"),
    newFlight(7, "Boeing 747", "2020-01-10", 1200, "2020-01-10", 1400, "YYC", "YYZ"),
    newFlight(8, "Boeing 747", "2020-01-10", 1100, "2020-01-10", 1800, "YVR", "YOO"),
    newFlight(9, "Boeing 747", "2020-01-11", 1700, "2020-01-12", 1800, "YVR", "YYZ"),

    newFlight(10, "United Airlines 132", "2020-01-01", 1300, "2020-01-01", 1900, "YYZ", "YVR"),
    newFlight(11, "United Airlines 189", "2020-01-01", 1215, "2020-01-01", 1415, "YYZ", "YYC"),

    newFlight(12, "Boeing 132", "2020-05-28", 1200, "2020-05-29", 300, "YYZ", "YYC"),
    newFlight(13, "Boeing 132", "2020-05-29", 1200, "2020-05-29", 2200, "YYC", "YVR"),
    newFlight(14, "AC-130", "2020-05-30", 0, "2020-05-30", 1500, "YVR", "SFO"),

    // depart Mar 1, arrive Mar 1
    newFlight(i++, "Boeing 123", "2020-03-01", 0, "2020-03-01", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-01", 1100, "2020-03-01", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-01", 100, "2020-03-01", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-01", 1200, "2020-03-01", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-01", 1500, "2020-03-01", 1600, "YYC", "YYZ"),
    newFlight(i++, "AC-130", "2020-03-01", 0, "2020-03-01", 1500, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-01", 0, "2020-03-01", 1000, "YVR", "YYZ"),
    newFlight(i++, "Boeing 747", "2020-03-01", 0, "2020-03-01", 530, "YVR", "YYC"),

    newFlight(i++, "AC-130", "2020-03-01", 445, "2020-03-01", 930, 'YYZ', 'YYC'),
    newFlight(i++, "AC-130", "2020-03-01", 1100, "2020-03-01", 1530, 'YYC', 'YVR'),


    // depart Mar 2, arrive Mar 2
    newFlight(i++, "Boeing 747", "2020-03-02", 0, "2020-03-02", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-02", 1100, "2020-03-02", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-02", 100, "2020-03-02", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-02", 1200, "2020-03-02", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-02", 1500, "2020-03-02", 1600, "YYC", "YVR"),
    newFlight(i++, "AC-130", "2020-03-02", 0, "2020-03-02", 1500, "YYC", "YVR"),

    // depart Mar 3, arrive Mar 3
    newFlight(i++, "Boeing 747", "2020-03-03", 0, "2020-03-03", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-03", 1100, "2020-03-03", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-03", 100, "2020-03-03", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-03", 1200, "2020-03-03", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-03", 1500, "2020-03-03", 1600, "YYC", "YVR"),

    // depart Mar 4, arrive Mar 4
    newFlight(i++, "Boeing 747", "2020-03-04", 0, "2020-03-04", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-04", 1100, "2020-03-04", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-04", 100, "2020-03-04", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-04", 1200, "2020-03-04", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-04", 1500, "2020-03-04", 1600, "YYC", "YVR"),

    // depart Mar 5, arrive Mar 5
    newFlight(i++, "Boeing 747", "2020-03-05", 0, "2020-03-05", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-05", 1100, "2020-03-05", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-05", 100, "2020-03-05", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-05", 1200, "2020-03-05", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-05", 1500, "2020-03-05", 1600, "YYC", "YVR"),

    // depart Mar 6, arrive Mar 6
    newFlight(i++, "Boeing 747", "2020-03-06", 0, "2020-03-06", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-06", 1100, "2020-03-06", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-06", 100, "2020-03-06", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-06", 1200, "2020-03-06", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-06", 1500, "2020-03-06", 1600, "YYC", "YVR"),

    // depart Mar 7, arrive Mar 7
    newFlight(i++, "Boeing 747", "2020-03-07", 0, "2020-03-07", 1000, "YVR", "YYZ"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1100, "2020-03-07", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 100, "2020-03-07", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1200, "2020-03-07", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1500, "2020-03-07", 1600, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 0, "2020-03-07", 1000, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1100, "2020-03-07", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 100, "2020-03-07", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1200, "2020-03-07", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1500, "2020-03-07", 1600, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-07", 1100, "2020-03-07", 1800, "YYC", "YYZ"),
    newFlight(i++, "Boeing 747", "2020-03-07", 0, "2020-03-07", 830, "YVR", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-07", 930, "2020-03-07", 1800, "YYC", "YYZ"),

    // depart Mar 8, arrive Mar 8
    newFlight(i++, "Boeing 747", "2020-03-08", 0, "2020-03-08", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-08", 1100, "2020-03-08", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-08", 100, "2020-03-08", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-08", 1200, "2020-03-08", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-08", 1500, "2020-03-08", 1600, "YYC", "YVR"),

    // depart Mar 9, arrive Mar 9
    newFlight(i++, "Boeing 747", "2020-03-09", 0, "2020-03-09", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-09", 1100, "2020-03-09", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-09", 100, "2020-03-09", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-09", 1200, "2020-03-09", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-09", 1500, "2020-03-09", 1600, "YYC", "YVR"),

    // depart Mar 10, arrive Mar 10
    newFlight(i++, "Boeing 747", "2020-03-10", 0, "2020-03-10", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-10", 1100, "2020-03-10", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-10", 100, "2020-03-10", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-10", 1200, "2020-03-10", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-10", 1500, "2020-03-10", 1600, "YYC", "YVR"),

    // depart Mar 11, arrive Mar 11
    newFlight(i++, "Boeing 747", "2020-03-11", 0, "2020-03-11", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-11", 1100, "2020-03-11", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-11", 100, "2020-03-11", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-11", 1200, "2020-03-11", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-11", 1500, "2020-03-11", 1600, "YYC", "YVR"),

    // depart Mar 12, arrive Mar 12
    newFlight(i++, "Boeing 747", "2020-03-12", 0, "2020-03-12", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-12", 1100, "2020-03-12", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-12", 100, "2020-03-12", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-12", 1200, "2020-03-12", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-12", 1500, "2020-03-12", 1600, "YYC", "YVR"),

    // depart Mar 13, arrive Mar 13
    newFlight(i++, "Boeing 747", "2020-03-13", 0, "2020-03-13", 1000, "YYZ", "YYC"),
    newFlight(i++, "Boeing 747", "2020-03-13", 1100, "2020-03-13", 1800, "YYC", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-13", 100, "2020-03-13", 1300, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-13", 1200, "2020-03-13", 1400, "YYZ", "YVR"),
    newFlight(i++, "Boeing 747", "2020-03-13", 1500, "2020-03-13", 1600, "YYC", "YVR")
];

const getFlight = (flightid) => {
    return flights.find(flight => flight.flightid === flightid);
}

module.exports = {
    newFlight,
    flights,
    getFlight
}