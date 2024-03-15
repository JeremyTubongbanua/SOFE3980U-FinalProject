const getPaths = (flights, sourceid, destinationid, numberofstops, departdate, arrivedate) => {
    const paths = [];
    const visited = new Set();
    // breadth first search on flights
    if(numberofstops === 0) {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].sourceid === sourceid && flights[i].destinationid === destinationid && flights[i].departdate === departdate && flights[i].arrivedate === arrivedate) {
                paths.push([{ order: 1, ...flights[i] }]);
            }
        }
    } else if (numberofstops > 0) {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].sourceid === sourceid) {
                visited.add(flights[i].flightid);
                const queue = [[flights[i]]];
                while (queue.length > 0) {
                    const path = queue.shift();
                    const lastFlight = path[path.length - 1];
                    if (lastFlight.destinationid === destinationid && path.length - 1 === numberofstops && lastFlight.departdate === departdate && lastFlight.arrivedate === arrivedate) {
                        paths.push(path.map((flight, index) => ({ order: index + 1, ...flight })));
                    }
                    for (let j = 0; j < flights.length; j++) {
                        if (flights[j].sourceid === lastFlight.destinationid && !visited.has(flights[j].flightid)) {
                            visited.add(flights[j].flightid);
                            queue.push([...path, flights[j]]);
                        }
                    }
                }
            }
        }
    }
    return paths;
};

module.exports = { getPaths };
