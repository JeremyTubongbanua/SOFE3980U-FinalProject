const {getOffset} = require('../Airport');

// Test getOffset
test('getOffset', () => {
    expect(getOffset('YYZ')).toBe(-5);
    expect(getOffset('YYC')).toBe(-7);
    expect(getOffset('YVR')).toBe(-8);
    expect(getOffset('XXX')).toBe(null);
})