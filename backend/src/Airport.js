

const newAirport = (id, name, timezoneoffset) => {
    return {id, name, timezoneoffset};
}

airports = [
    newAirport('YYZ', 'Toronto', -5),
    newAirport('YOO', 'Oshawa', -5),
    newAirport('YYC', 'Calgary', -7),
    newAirport('YVR', 'Vancouver', -8)
]

module.exports = {
    newAirport,
    airports
};
