// this component composes an array of Flights and render them in a FlightBox component

import React from 'react';
import Flight from './flight';

interface FlightProps {
    flights: Array<Object>;
}


/**
 * FlightBox component displays a list of flights.
 *
 * @component
 * @example
 * // Usage:
 * <FlightBox flights={flightsArray} />
 *
 * @returns JSX.Element
 */
const FlightBox: React.FC<FlightProps> = ({flights}) => {

    function convertToTime(timeNumber) {
        const hours = Math.floor(timeNumber / 100);
        const minutes = timeNumber % 100;
    
        // Validate the input for hours and minutes
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
          return "Invalid time format";
        }
    
        // Determine AM/PM
        const amPm = hours >= 12 ? "pm" : "am";
    
        // Convert hours to 12-hour format, adjusting for "0"
        let formattedHours = (hours % 12 || 12).toString(); // Convert to string
    
        // Format hours and minutes with leading zeros
        formattedHours = formattedHours.padStart(2, "0"); // Apply padStart method
        const formattedMinutes = minutes.toString().padStart(2, "0");
    
        // Construct the final time string
        return `${formattedHours}:${formattedMinutes} ${amPm}`;
      }

    console.log('flights: ', flights);

    return (
        <div>
            {flights.map((flight: any, index) => (
                <div>
                <Flight
                    key={index}
                    sourceID={flight.sourceid}
                    destinationID={flight.destinationid}
                    departDate={flight.departdate}
                    arriveDate={flight.arrivedate}
                    flightID={flight.flightid}
                    planeName={flight.planename}
                    departureTime={convertToTime(flight.departtime)}
                    arrivalTime={convertToTime(flight.arrivetime)}
                    withCheckBox={false}
                    totalFlightTime={convertToTime(flight.totalflighttime)}
                />
                </div>
            ))}
        </div>
    );
};

export default FlightBox;