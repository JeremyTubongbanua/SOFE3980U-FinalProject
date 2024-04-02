
const {isDateInOrder} = require('../src/TimeUtils');

test('equal case', () => {
    const date2 = '2020-0-0';
    const date1 = '2020-0-0';
    expect(isDateInOrder(date1, date2)).toBe(true);
});

test('date1 is before date2', () => {
    const date2 = '2020-0-1';
    const date1 = '2020-0-0';
    expect(isDateInOrder(date1, date2)).toBe(true);
});

test('date1 is after date2', () => {
    const date2 = '2020-0-0';
    const date1 = '2020-0-1';
    expect(isDateInOrder(date1, date2)).toBe(false);
});
