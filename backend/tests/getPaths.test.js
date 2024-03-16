const { getPaths } = require('../src/Options');
const { flights } = require('../src/Flight');
const { IncorrectArgumentsError } = require('../src/IncorrectArgumentsError');

test('invalid number of stops', () => {
    const sourceid = "YYZ";
    const destinationid = "YVR";
    const departdate = '2020-01-01';
    const arrivedate = '2020-01-01';
    const numberofstops = -1;
    expect(() => getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate)).toThrow(IncorrectArgumentsError);
});

test('arrive date is before depart date', () => {
    const sourceid = "YYZ";
    const destinationid = "YVR";
    const departdate = '2020-01-02';
    const arrivedate = '2020-01-01';
    const numberofstops = 0;
    expect(() => getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate)).toThrow(IncorrectArgumentsError);
});

test('same destniation as source', () => {
    const sourceid = "YYZ";
    const destinationid = "YYZ";
    const departdate = '2020-01-01';
    const arrivedate = '2020-01-01';
    const numberofstops = 0;
    expect(() => getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate)).toThrow(IncorrectArgumentsError);
});

test('no direct flight from YYZ to YOO', () => {
    const sourceid = "YYZ";
    const destinationid = "YOO";
    const departdate = '2020-01-01';
    const arrivedate = '2020-01-01';
    const numberofstops = 0;
    const paths = getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate);
    expect(paths.length).toBe(0);
});

test('direct flight from YYZ to YYC', () => {
    /**
     * [
     *   [
     *     {
     *       order: 1,
     *       flightid: 1,
     *       planename: 'Boeing 747',
     *       departdate: '2020-01-01',
     *       departtime: 1200,
     *       arrivedate: '2020-01-01',
     *       arrivetime: 1400,
     *       sourceid: 'YYZ',
     *       destinationid: 'YYC'
     *     }
     *   ],
     *   [
     *     {
     *       order: 1,
     *       flightid: 11,
     *       planename: 'United Airlines 189',
     *       departdate: '2020-01-01',
     *       departtime: 1215,
     *       arrivedate: '2020-01-01',
     *       arrivetime: 1415,
     *       sourceid: 'YYZ',
     *       destinationid: 'YYC'
     *     }
     *   ]
     * ]
     */
    const sourceid = "YYZ";
    const destinationid = "YYC";
    const departdate = '2020-01-01';
    const arrivedate = '2020-01-01';
    const numberofstops = 0;
    const paths = getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate);
    expect(paths.length).toBe(2);
    expect(paths[0].length).toBe(1);
    expect(paths[0][0].flightid).toBe(1);
    expect(paths[0][0].destinationid).toBe('YYC');
    expect(paths[1].length).toBe(1);
    expect(paths[1][0].flightid).toBe(11);
    expect(paths[1][0].sourceid).toBe('YYZ');
    expect(paths[1][0].destinationid).toBe('YYC');
});

test('one stop flight from YYZ to YVR, number of stops > 0', () => {
    /**
     * [
     *   [
     *     {
     *       order: 1,
     *       flightid: 1,
     *       planename: 'Boeing 747',
     *       departdate: '2020-01-01',
     *       departtime: 1200,
     *       arrivedate: '2020-01-01',
     *       arrivetime: 1400,
     *       sourceid: 'YYZ',
     *       destinationid: 'YYC'
     *     },
     *     {
     *       order: 2,
     *       flightid: 2,
     *       planename: 'Boeing 747',
     *       departdate: '2020-01-01',
     *       departtime: 1500,
     *       arrivedate: '2020-01-01',
     *       arrivetime: 1600,
     *       sourceid: 'YYC',
     *       destinationid: 'YVR'
     *     }
     *   ]
     * ]
     */
    const sourceid = "YYZ";
    const destinationid = "YVR";
    const departdate = '2020-01-01';
    const arrivedate = '2020-01-01';
    const numberofstops = 1;
    const paths = getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate);
    expect(paths.length).toBe(1);
    expect(paths[0].length).toBe(2);
    expect(paths[0][0].flightid).toBe(1);
    expect(paths[0][0].sourceid).toBe('YYZ');
    expect(paths[0][0].destinationid).toBe('YYC');
    expect(paths[0][1].flightid).toBe(2);
    expect(paths[0][1].sourceid).toBe('YYC');
    expect(paths[0][1].destinationid).toBe('YVR');
});

test('no flights within date range', () => {
    const sourceid = "YYZ";
    const destinationid = "YVR";
    const departdate = '2020-03-15';
    const arrivedate = '2020-03-15';
    const numberofstops = 0;
    const paths = getPaths(flights, sourceid, destinationid, numberofstops, departdate, arrivedate);
    expect(paths.length).toBe(0);
});
