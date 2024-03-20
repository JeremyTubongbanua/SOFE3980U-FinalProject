const { calculateAirTimeFlights, getFlight } = require('../src/Flight');
// TODO

test('dummy', () => {
    const flights = [
        getFlight(1),
        getFlight(2)
    ];
    const result = calculateAirTimeFlights(flights);
    const expected = 700;
    expect(result).toBe(expected);
});