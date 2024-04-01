import React from "react";

interface ReceiptFlightProps {
  sourceID: string;
  destinationID: string;
  flightID: string;
  planeName: string;
  departureDate: string;
  departureTime: number;
  arrivalDate: string;
  arrivalTime: number;
  airTime: number;
  totalFlightTime: number;
}

const ReceiptFlight: React.FC<ReceiptFlightProps> = ({
  sourceID,
  destinationID,
  flightID,
  planeName,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime,
  airTime,
}) => {
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

  function convertHour(minutes) {
    if (minutes < 0) {
      return -1; // Or throw an error if you prefer
    }

    // Calculate the number of hours
    const hours = Math.floor(minutes / 100);

    // Return the number of hours
    return hours;
  }

  return (
    <div className="flex flex-col p-4 gap-3 items-start w-full border border-black rounded-xl">
      <h3 className=" font-semibold text-2xl">Flight #: {flightID}</h3>

      <div className=" text-gray-500 text-lg font-semibold">
        <p>
          {sourceID} &rarr; {destinationID}
        </p>
        <p>Plane: {planeName}</p>
        <p>Flight ID: {flightID}</p>
      </div>

      <div className="text-gray-500 text-lg font-semibold">
        <p>
          Departure: {departureDate} | {convertToTime(departureTime)} |{" "}
          {sourceID}
        </p>
        <p>
          Arrival: {arrivalDate} | {convertToTime(arrivalTime)} |{" "}
          {destinationID}
        </p>
      </div>

      <p className="text-black00 text-lg font-bold">
        Flight time: {convertHour(airTime)} hours
      </p>
    </div>
  );
};

export default ReceiptFlight;
