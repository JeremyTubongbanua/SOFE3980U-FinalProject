const { calculateAirTimeFlights, getFlight, flights } = require('../src/Flight');
// TODO

test('ensure each flight has air time > 0', () => {
    let result;
    for(let i = 0; i < flights.length; i++) {
        result = calculateAirTimeFlights([flights[i]]);
        console.log(flights[i]);
        expect(result).toBeGreaterThan(0);
    }
});

test('dummy', () => {
    const flights = [
        getFlight(1),
        getFlight(2)
    ];
    const result = calculateAirTimeFlights(flights);
    const expected = 1400;
    expect(result).toBe(expected);
});