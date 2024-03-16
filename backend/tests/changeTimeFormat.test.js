const { IncorrectArgumentsError } = require('../src/IncorrectArgumentsError');
const { changeTimeFormat } = require('../src/TimeUtils');

// Import the necessary modules

// const changeTimeFormat = (time, mode) => {
//     if (mode === '12') {
//         if (time < 1200) {
//             return time + 1200;
//         } else if (time >= 1300) {
//             return time - 1200;
//         }
//     } else if (mode === '24') {
//         if (time < 100) {
//             return time + 1200;
//         } else if (time >= 100 && time < 800) {
//             return time + 2400;
//         }
//     }
//     return time;
// }

// Test cases for the changeTimeFormat function
describe('changeTimeFormat', () => {
    it('should convert 24-hour time to 12-hour time and vice versa', () => {
        // Test case: Zero case (00:00 → 12:00 am)
        expect(changeTimeFormat('00:00', '12')).toBe('12:00 am');

        // Test case: 12:00 am → 00:00
        expect(changeTimeFormat('12:00 am', '24')).toBe('00:00');

        // Test case: 14:00 → 2:00 pm
        expect(changeTimeFormat('14:00', '12')).toBe('2:00 pm');

        // Test case: 23:00 → 11:00 pm
        expect(changeTimeFormat('23:00', '12')).toBe('11:00 pm');

        // Test case: 1:05 pm → 13:00
        expect(changeTimeFormat('1:05 pm', '24')).toBe('13:05');

        // Test case: 6:10 am → 6:10
        expect(changeTimeFormat('06:10 am', '24')).toBe('06:10');

        // Test case: 12:30 am → 00:30
        expect(changeTimeFormat('12:30 pm', '24')).toBe('12:30');

        expect(changeTimeFormat('12:30', '12')).toBe('12:30 pm');

        expect(changeTimeFormat('9:00', '12')).toBe('9:00 am');
    });

    it('should handle invalid input', () => {
        //Invalid input - empty string
        expect(() => changeTimeFormat('', "12")).toThrow(IncorrectArgumentsError);

        //Invalid input - non-string value
        expect(() => changeTimeFormat(123, "12")).toThrow(IncorrectArgumentsError);

        //Invalid Mode - not 12 or 24
        expect(() => changeTimeFormat('00:00', "123")).toThrow(IncorrectArgumentsError);

        expect(() => changeTimeFormat('10:00 pm', "12")).toThrow(IncorrectArgumentsError);

        expect(() => changeTimeFormat('12:00', "24")).toThrow(IncorrectArgumentsError);


    });
});