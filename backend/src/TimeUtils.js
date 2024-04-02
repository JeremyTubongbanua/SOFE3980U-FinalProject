const { airports } = require('./Airport');
const { IncorrectArgumentsError } = require('./IncorrectArgumentsError');

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
 * @param {*} time example: '1200' or '12:00 pm'
 * @param {*} mode example: '12' or '24'
 * @returns example: changeTimeFormat('1200', '12') returns '12:00 pm' and changeTimeFormat('12:00 pm', '24') returns '1200'
 */

const changeTimeFormat = (time, mode) => {
    if (typeof time !== 'string' || typeof mode !== 'string') {
        throw new IncorrectArgumentsError('Invalid input. Please provide a valid time in the format "HH:MM".');
    }

    if(time === '' || mode === '') {
        throw new IncorrectArgumentsError('Invalid input. Please provide a valid time in the format "HH:MM".');
    }

    if (mode !== '12' && mode !== '24') {
        throw new IncorrectArgumentsError('Invalid input. Mode must be "12" or "24".');
    }

    if(mode === '12' && (time.includes('am') || time.includes('pm'))) {
        throw new IncorrectArgumentsError('Invalid input. Please provide a valid time in the format "HH:MM am/pm".');
    }

    if(mode === '24' && !(time.includes('am') || time.includes('pm'))) {
        throw new IncorrectArgumentsError('Invalid input. Please provide a valid time in the format "HH:MM".');
    }

    if(mode === '12') {
        // 24hr -> 12hr
        let split = time.split(':');
        let hour = parseInt(split[0]);
        let minute = split[1];
        let val = parseInt(hour + minute);
        let strtoreturn;
        if(hour > 12) {
            val -= 1200;
            strtoreturn = (hour - 12) + ':' + minute + ' pm';
        } else if(hour === 12) {
            val = 1200;
            strtoreturn = hour + ':' + minute + ' pm';
        } else if(hour === 0) {
            val = 1200;
            strtoreturn = '12:' + minute + ' am';
        } else {
            val = val;
            strtoreturn = hour + ':' + minute + ' am';
        }
        return strtoreturn;
    } else {
        // 12hr -> 24hr
        let split = time.split(' ');
        let ampm = split[1];
        let hour = split[0].split(':')[0];
        let minute = split[0].split(':')[1];
        let val = parseInt(hour + minute);
        let strtoreturn;
        if(ampm === 'pm') {
            if(hour !== '12') {
            val += 1200;
            }
            strtoreturn = val.toString();
        } else {
            if(hour === '12') {
            val -= 1200;
            }
            strtoreturn = val.toString();
        }

        // add trailing zeroes if necessary
        if(strtoreturn.length != 4) {
            while(strtoreturn.length < 4) {
            strtoreturn = '0' + strtoreturn;
            }
        }

        // add colon
        strtoreturn = strtoreturn.slice(0, 2) + ':' + strtoreturn.slice(2);

        return strtoreturn;
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
