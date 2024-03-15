const { calculateAirTime } = require('../src/TimeUtils');

test('zero case', () => {
    const actual = calculateAirTime(0, 0, 0, 0);
    const expected = 0;
    expect(actual).toEqual(expected);
});

test('potential negative case', () => {
    const actual = calculateAirTime(0, -2, 0, 0);
    const expected = 200;
    expect(actual).toEqual(expected);
})

test('air time between YYZ depart at 1200 and YYC land at 1800', () => {
    const actual = calculateAirTime(1200, -5, 1800, -7);
    const expected = 400;
    expect(actual).toEqual(expected);
});

test('air time between YYC depart at 1500 and YVR land at 2200', () => {
    const actual = calculateAirTime(1500, -7, 2200, -8);
    const expected = 600;
    expect(actual).toEqual(expected);
});

test('air time between YOO depart at 800 and YYZ land at 900', () => {
    const actual = calculateAirTime(800, -5, 900, -5);
    const expected = 100;
    expect(actual).toEqual(expected);
});

test('air time between YYC depart at 1000 and YOO land at 1600', () => {
    const actual = calculateAirTime(1000, -7, 1600, -5);
    const expected = 800;
    expect(actual).toEqual(expected);
});

test('air time between YVR depart at 200 and YOO land at 1200', () => {
    const actual = calculateAirTime(200, -8, 1200, -5);
    const expected = 1300;
    expect(actual).toEqual(expected);
});

test('air time between YYC depart at 1500 and YVR land at 2200', () => {
    const actual = calculateAirTime(1500, -7, 2200, -8);
    const expected = 600;
    expect(actual).toEqual(expected);
});
