const { newFlight } = require('../Flight');
const { calculateAirTime } = require('../TimeUtils');
const { getOffset } = require('../Airport');

test('air time between YYZ depart at 1200 and YYC land at 1800', () => {
    const f1 = newFlight(   1, "Boeing 747", "2020-01-01", 1200, "2020-01-01", 1800, "YYZ", "YYC");
    expect(calculateAirTime(f1.departtime, getOffset(f1.sourceid), f1.arrivetime, getOffset(f1.destinationid))).toEqual(400);
});

test('air time between YYC depart at 1500 and YVR land at 2200', () => {
    const f2 = newFlight(2, "Boeing 747", "2020-01-01", 1500, "2020-01-01", 2200, "YYC", "YVR");
    expect(calculateAirTime(f2.departtime, getOffset(f2.sourceid), f2.arrivetime, getOffset(f2.destinationid))).toEqual(600);
});
