

const newAirport = (id, name, timezoneoffset) => {
    return {id, name, timezoneoffset};
}

airports = [
    newAirport('YYZ', 'Toronto', -5),
    newAirport('YYC', 'Calgary', -7),
    newAirport('YVR', 'Vancouver', -8)
]

const getOffset = (id) => {
    for(let i = 0; i < airports.length; i++) {
        if(airports[i].id === id) {
            return airports[i].timezoneoffset;
        }
    }
    return null;
}

module.exports = {
    newAirport,
    getOffset,
    airports
};
