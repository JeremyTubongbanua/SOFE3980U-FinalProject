const { airports } = require('./Airport');

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

    if (mode !== '12' && mode !== '24') {
        return 'Invalid Input';
    }


    const hours = parseInt(time.substring(0, 2), 10);
    const minutes = parseInt(time.substring(3), 10);


    let formattedTime;
    if (mode === '12') {
        const suffix = hours >= 12 ? 'pm' : 'am';
        const twelveHour = hours % 12 || 12; // Handle midnight (0:00) as 12:00 am
        formattedTime = `${twelveHour}:${minutes.toString().padStart(2, '0')} ${suffix}`;
    } else {

        const twentyFourHour = hours === 12 ? 0 : hours % 12; // Handle 12:00 pm as 0:00
        formattedTime = `${twentyFourHour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    return formattedTime;
}

/**
 * Get the timezone offset of the city of the airport
 * @param {*} id id of the airport (e.g. YYZ)
 * @returns the timezone offset of the airport (e.g. -5)
 */
const getOffset = (id) => {
    for (let i = 0; i < airports.length; i++) {
        if (airports[i].id === id) {
            return airports[i].timezoneoffset;
        }
    }
    return null;
}

module.exports = { calculateAirTime, changeTimeFormat, getOffset }
