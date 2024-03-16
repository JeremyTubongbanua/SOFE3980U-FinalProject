const { IncorrectArgumentsError } = require('../src/IncorrectArgumentsError');
const { changeTimeFormat } = require('../src/TimeUtils');

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

        // Test case: 12:30 -> 12:30 pm
        expect(changeTimeFormat('12:30', '12')).toBe('12:30 pm');

        // Test case: 9:00 -> 9:00 am
        expect(changeTimeFormat('9:00', '12')).toBe('9:00 am');

        // Test case: 1:05 pm → 13:00
        expect(changeTimeFormat('1:05 pm', '24')).toBe('13:05');

        // Test case: 6:10 am → 6:10
        expect(changeTimeFormat('06:10 am', '24')).toBe('06:10');

        // Test case: 12:30 am → 00:30
        expect(changeTimeFormat('12:30 pm', '24')).toBe('12:30');
    });

    it('should handle invalid input', () => {
        //Invalid input - empty string
        expect(() => changeTimeFormat('', "12")).toThrow(IncorrectArgumentsError);

        //Invalid input - non-string value
        expect(() => changeTimeFormat(123, "12")).toThrow(IncorrectArgumentsError);

        //Invalid Mode - not 12 or 24
        expect(() => changeTimeFormat('00:00', "123")).toThrow(IncorrectArgumentsError);

        //Invalid Input - converting from 12 hour format to 12 hour format
        expect(() => changeTimeFormat('10:00 pm', "12")).toThrow(IncorrectArgumentsError);

        //Invalid Input - converting from 24 hour format to 24 hour format
        expect(() => changeTimeFormat('12:00', "24")).toThrow(IncorrectArgumentsError);


    });
});