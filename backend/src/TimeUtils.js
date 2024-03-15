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
 * Change time mode from 24 hour to 12 hour or vice versa
 * @param {*} time example: 1200
 * @param {*} mode example: '12' or '24'
 * @returns example: 1400 -> 200
 */

function changeTimeFormat(time, mode) {

    if (!time || typeof time !== 'string' || !time.match(/^\d{2}:\d{2}$/)) {
        return 'Invalid input. Please provide a valid time in the format "HH:MM".';
    }

    // Validate mode argument
    if (mode !== '12' && mode !== '24') {
        return 'Invalid input. Mode must be "12" or "24".';
    }

    // Split the time into hours and minutes
    const parts = time.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parts[1];

    if (mode === '24') {
        // Convert from 12-hour to 24-hour
        if (hours === 12 && parts[1].includes('am')) {
            return '00:' + minutes;
        } else if (hours === 12 && parts[1].includes('pm')) {
            return '12:' + minutes;
        } else {
            const adjustedHours = hours % 12;
            const formattedHours = adjustedHours.toString().padStart(2, '0');
            return `${formattedHours}:${minutes}`;
        }
    } else if (mode === '12') {
        // Convert from 24-hour to 12-hour
        if (hours === 0) {
            return '12:00 am';
        } else if (hours === 12) {
            return '12:00 pm';
        } else if (hours > 12) {
            const newHours = hours % 12;
            return `${newHours}:00 pm`;
        } else {
            const amPm = hours < 12 ? 'am' : 'pm';
            return `${hours}:00 ${amPm}`;
        }
    }
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

/**
 * returns true if date1 is before date2
 * @param {*} date1 string in the mode of 'YYYY-MM-DD'
 * @param {*} date2 string in the mode of 'YYYY-MM-DD'
 */
const isDateInOrder = (date1, date2) => {
    return date1 <= date2;
}

module.exports = { calculateAirTime, changeTimeFormat, getOffset, isDateInOrder }
