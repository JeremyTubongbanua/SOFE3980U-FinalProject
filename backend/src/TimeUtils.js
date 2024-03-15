const {airports} = require('./Airport');

/**
 * Caclulate the air time between two timezones where time1 is departure time in timezoneoffset 1 and time2 is arrival time in timezoneoffset 2
 * @param {*} time1 example: 1200 (12pm)
 * @param {*} timezoneoffset1 example: -5 (EST)
 * @param {*} time2 example: 1400 (2pm)
 * @param {*} timezoneoffset2  example: -7 (MST)
 * @returns example: 200 (2 hours)
 */
const calculateAirTime = (time1, timezoneoffset1, time2, timezoneoffset2) => {
    const time1InUTC = time1 + (timezoneoffset1 * 100);
    const time2InUTC = time2 + (timezoneoffset2 * 100);
    return Math.abs(time1InUTC - time2InUTC);
}

/**
 * Change time format from 24 hour to 12 hour or vice versa
 * @param {*} time example: 1200
 * @param {*} mode example: '12' or '24'
 * @returns example: 1400 -> 200
 */
const changeTimeFormat = (time, mode) => {
    if (mode === '12') {
        if (time < 1200) {
            return time + 1200;
        } else if (time >= 1300) {
            return time - 1200;
        }
    } else if (mode === '24') {
        if (time < 100) {
            return time + 1200;
        } else if (time >= 100 && time < 800) {
            return time + 2400;
        }
    }
    return time;
}

/**
 * Get the timezone offset of the city of the airport
 * @param {*} id id of the airport (e.g. YYZ)
 * @returns the timezone offset of the airport (e.g. -5)
 */
const getOffset = (id) => {
    for(let i = 0; i < airports.length; i++) {
        if(airports[i].id === id) {
            return airports[i].timezoneoffset;
        }
    }
    return null;
}

/**
 * returns true if date1 is before date2
 * @param {*} date1 string in the format of 'YYYY-MM-DD'
 * @param {*} date2 string in the format of 'YYYY-MM-DD'
 */
const isDateInOrder = (date1, date2) => {
    return date1 <= date2;
}

module.exports = { calculateAirTime, changeTimeFormat, getOffset, isDateInOrder }
