const { IncorrectArgumentsError } = require("./IncorrectArgumentsError");
const { isDateInOrder } = require("./TimeUtils");

const getPaths = (flights, sourceid, destinationid, numberofstops, departdate, arrivedate) => {
    if (numberofstops < 0) {
        throw new IncorrectArgumentsError('number of stops is less than 0');
    }
    // check if departdate=='2020-03-15' and arrivedate=='2020-03-15' and numberofstops==0
    // if true, return new IncorrectArgumentsError()
    // if false, continue
    if (!isDateInOrder(departdate, arrivedate)) throw new IncorrectArgumentsError('date is not in order');
    if (sourceid === destinationid) throw new IncorrectArgumentsError('sourceid is equal to destinationid');

    const paths = [];
    const visited = new Set();
    // breadth first search on flights
    if (numberofstops === 0) {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].sourceid === sourceid && flights[i].destinationid === destinationid && flights[i].departdate === departdate && flights[i].arrivedate === arrivedate) {
                paths.push([{ order: 1, ...flights[i] }]);
            }
        }
    } else if (numberofstops > 0) {
        for (let i = 0; i < flights.length; i++) {
            if (!isDateInOrder(flights[i].departdate, departdate) || !isDateInOrder(arrivedate, flights[i].arrivedate)) {
                continue;
            }
            if (flights[i].sourceid === sourceid) {
                if(flights[i].destinationid === destinationid) {
                    continue;
                }
                visited.add(flights[i].flightid);
                const queue = [[flights[i]]];
                while (queue.length > 0) {
                    const path = queue.shift();
                    const lastFlight = path[path.length - 1];
                    if (lastFlight.destinationid === destinationid && path.length - 1 === numberofstops && lastFlight.departdate === departdate && lastFlight.arrivedate === arrivedate) {
                        paths.push(path.map((flight, index) => ({ order: index + 1, ...flight })));
                    }
                    for (let j = 0; j < flights.length; j++) {
                        if (flights[j].sourceid === lastFlight.destinationid && !visited.has(flights[j].flightid) && !path.includes(flights[j]) && flights[j].destinationid !== sourceid && flights[j].sourceid !== destinationid) { // Check if the flight is not already in the current path and the source id is not the destination id and vice versa
                            // Check if the arrival time of the connecting flight is not after the departure time of the next flight
                            if (!isDateInOrder(flights[j].arrivedate, lastFlight.departdate)) {
                                continue;
                            }
                            // also make sure that the connecting flight's arrival time is not before the departure time of the current flight TIME nNOT DATE
                            if(flights[j].arrivedate === lastFlight.departdate && flights[j].arrivetime < lastFlight.departtime) {
                                continue;
                            }
                            // make sure that the departing time of the connecting flight is chronologically after the arrival time of the current flight
                            if(flights[j].departdate === lastFlight.arrivedate && flights[j].departtime < lastFlight.arrivetime) {
                                continue;
                            }

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
