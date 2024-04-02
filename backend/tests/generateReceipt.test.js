const {generateReceipt} = require('../src/Receipt');
const {flights, getFlight} = require('../src/Flight');

test('Generate an empty receipt', () => {
    const name = '';
    const email = '';
    const departFlightIds = [];
    const returnFlightIds = [];
    const receipt = generateReceipt(name, email, departFlightIds, returnFlightIds);
    expect(receipt.name).toBe(name);
    expect(receipt.email).toBe(email);
    expect(receipt.totaldepartflighttime).toBe(0);
    expect(receipt.departureflights.length).toBe(departFlightIds.length);
    expect(receipt.totalreturnflighttime).toBe(0);
    expect(receipt.returnflights.length).toBe(returnFlightIds.length);
    expect(receipt.transactionid).toBeGreaterThan(0);
});

test('One stop flight from YYZ to YVR', () => {
    const name = 'Natasha';
    const email = 'natasha@gmail.com';
    const departFlightIds = [1, 2];
    const returnFlightIds = [11, 7];
    const receipt = generateReceipt(name, email, departFlightIds, returnFlightIds);
    expect(receipt.name).toBe(name);
    expect(receipt.email).toBe(email);
    expect(receipt.totaldepartflighttime).toBe(1400);
    expect(receipt.departureflights.length).toBe(departFlightIds.length);
    expect(receipt.totalreturnflighttime).toBe(900);
    expect(receipt.returnflights.length).toBe(returnFlightIds.length);
    for(let i = 0; i < departFlightIds.length; i++) {
        const flight = getFlight(departFlightIds[i]);
        expect(receipt.departureflights[i].flightid).toBe(flight.flightid);
        expect(receipt.departureflights[i].departdate).toBe(flight.departdate);
        expect(receipt.departureflights[i].departtime).toBe(flight.departtime);
        expect(receipt.departureflights[i].arrivedate).toBe(flight.arrivedate);
        expect(receipt.departureflights[i].arrivetime).toBe(flight.arrivetime);
        expect(receipt.departureflights[i].sourceid).toBe(flight.sourceid);
        expect(receipt.departureflights[i].destinationid).toBe(flight.destinationid);
    }
    for(let i = 0; i < returnFlightIds.length; i++) {
        const flight = getFlight(returnFlightIds[i]);
        expect(receipt.returnflights[i].flightid).toBe(flight.flightid);
        expect(receipt.returnflights[i].departdate).toBe(flight.departdate);
        expect(receipt.returnflights[i].departtime).toBe(flight.departtime);
        expect(receipt.returnflights[i].arrivedate).toBe(flight.arrivedate);
        expect(receipt.returnflights[i].arrivetime).toBe(flight.arrivetime);
        expect(receipt.returnflights[i].sourceid).toBe(flight.sourceid);
        expect(receipt.returnflights[i].destinationid).toBe(flight.destinationid);
    }
    expect(receipt.transactionid).toBeGreaterThan(0);
});