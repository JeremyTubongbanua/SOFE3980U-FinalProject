const { calculateAirTime } = require('../TimeUtils');

test('Zero Case', () => {
    expect(calculateAirTime(0, 0, 0, 0)).toEqual(0);
});

test('Negative Case', () => {
    expect(calculateAirTime(0, -2, 0, 0)).toEqual(200);
});

test('air time between YYZ depart at 1200 and YYC land at 1800', () => {
    expect(calculateAirTime(1200, -5, 1800, -7)).toEqual(400);
});

test('air time between YYC depart at 1500 and YVR land at 2200', () => {
    expect(calculateAirTime(1500, -7, 2200, -8)).toEqual(600);
});

test('air time between YOO depart at 800 and YYZ land at 900', () => {
    expect(calculateAirTime(800, -5, 900, -5)).toEqual(100);
});

test('air time between YYC depart at 1000 and YOO land at 1600', () => {
    expect(calculateAirTime(1000, -7, 1600, -5)).toEqual(800);
});
test('air time between YVR depart at 200 and YOO land at 1200', () => {
    expect(calculateAirTime(200, -8, 1200, -5)).toEqual(1300);
});
