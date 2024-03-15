const {newFlight, calculateAirTime} = require('../Flight');
const {getOffset} = require('../Airport');

// Generate Flights
const f1 = newFlight(1, "Boeing 747", "2020-01-01", 1200, "2020-01-01", 1800, "YYZ", "YYC");
const f2 = newFlight(2, "Boeing 747", "2020-01-01", 1500, "2020-01-01", 2200, "YYC", "YVR");

// Test calculateAirTime
test('calculateAirTime', () => {
    expect(calculateAirTime(f1.departtime, getOffset(f1.sourceid), f1.arrivetime, getOffset(f1.destinationid))).toBe(400);
    expect(calculateAirTime(f2.departtime, getOffset(f2.sourceid), f2.arrivetime, getOffset(f2.destinationid))).toBe(600);
});
