const { getPaths } = require('./src/Options');
const { flights } = require('./src/Flight');

// const sourceid = "YYZ";
// const destinationid = "YYC";
// const numberofstops = 0;
const sourceid = "YYZ";
const destinationid = "YVR";
const numberofstops = 1;
const paths = getPaths(flights, sourceid, destinationid, numberofstops);
console.log(paths);
