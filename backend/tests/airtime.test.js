const { calculateAirTime } = require('../TimeUtils');

test ('zero case', () => {
    const actual = calculateAirTime(0, 0, 0, 0);
    const expected = 0;
    expect(actual).toEqual(expected);
});

test ('potential negative case', () => {
    const actual = calculateAirTime(0, -2, 0, 0);
    const expected = 200;
    expect(actual).toEqual(expected);
})

test('air time between YYZ depart at 1200 and YYC land at 1800', () => {
    expect(calculateAirTime(1200, -5, 1800, -7)).toEqual(400);
});

test('air time between YYC depart at 1500 and YVR land at 2200', () => {
    expect(calculateAirTime(1500, -7, 2200, -8)).toEqual(600);
});
