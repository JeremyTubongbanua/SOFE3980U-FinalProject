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
  totalFlightTime,
}) => {
  function convertToTime(minutes) {
    // Handle invalid input
    if (minutes < 0 || minutes > 2300) {
      return "Invalid input. Please enter a value between 0 and 2300.";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = hours === 0 ? 12 : hours % 12; // Handle 12 midnight case
    const amPm = hours < 12 ? "am" : "pm";

    return `${formattedHours.toString().padStart(2, "0")}:${remainingMinutes
      .toString()
      .padStart(2, "0")}${amPm}`;
  }

  function calculateHoursDifference(startTime, endTime) {
    // Handle invalid input (outside 0-2300 range)
    if (startTime < 0 || startTime > 2300 || endTime < 0 || endTime > 2300) {
      return "Invalid input. Please enter times between 0 and 2300 (minutes).";
    }

    // Calculate the total difference in minutes
    const timeDifference = (endTime - startTime) % 1440; // Wrap around for cases exceeding 24 hours

    // Calculate the number of hours
    const hours = Math.floor(timeDifference / 60);

    return hours;
  }

  return (
    <div className="flex flex-col p-4 gap-3 items-start w-full border border-black rounded-xl">
      <h3 className=" font-semibold text-2xl">Flight #: asdasdasdasd</h3>

      <div className=" text-gray-500 text-lg font-semibold">
        <p>
          {sourceID} &rarr; {destinationID}
        </p>
        <p>Plane: {planeName}</p>
        <p>Flight ID: {flightID}</p>
      </div>

      <div className="text-gray-500 text-lg font-semibold">
        <p>
          Departure: {departureDate} | {convertToTime(departureTime)}
        </p>
        <p>
          Arrival: {arrivalDate} | {convertToTime(arrivalTime)}
        </p>
      </div>

      <p className="text-black00 text-lg font-bold">
        Flight time: {calculateHoursDifference(departureTime, arrivalTime)}{" "}
        hours
      </p>
    </div>
  );
};

export default ReceiptFlight;
