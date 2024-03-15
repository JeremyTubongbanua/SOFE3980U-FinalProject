const { getOffset } = require('../src/TimeUtils');

test('getOffset - YYZ', () => {
    expect(getOffset('YYZ')).toBe(-5);
});

test('getOffset - YYC', () => {
    expect(getOffset('YYC')).toBe(-7);
});

test('getOffset - YVR', () => {
    expect(getOffset('YVR')).toBe(-8);
});

test('getOffset - YOO', () => {
    expect(getOffset('YOO')).toBe(-5);
});

test('getOffset - XXX', () => {
    expect(getOffset('XXX')).toBe(null);
});
