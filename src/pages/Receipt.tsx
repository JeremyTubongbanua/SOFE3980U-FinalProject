import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReceiptFlight from "../components/ReceiptFlight";

const Receipt = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);

  const [is24HourFormat, setIs24HourFormat] = useState(false);

  const handleChange = (event) => {
    setIs24HourFormat(!is24HourFormat);
  };

  function generateTransactionId(length = 8) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const charPool = letters + digits;

    let transactionId = "";
    for (let i = 0; i < length; i++) {
      transactionId += charPool.charAt(
        Math.floor(Math.random() * charPool.length)
      );
    }

    return transactionId;
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
    <div className="flex flex-col items w-full p-10 gap-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-extrabold">Receipt</h1>
        <h2 className="text-2xl font-semibold">
          Thank you for using SuperCoolFlights!
        </h2>
      </div>

      <div className="flex flex-col p-5 justify-center items-center gap-5">
        <div className="flex flex-col flex-start text-black font-semibold text-xl">
          <p>Name: {data.data.name}</p>
          <p>Email: {data.data.email}</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-600">
          Transcation ID: {generateTransactionId()}
        </h3>

        <hr className="text-gray-600 w-[500px] h-2" />
        {/* 24 hour time toggle: */}
        <div className="flex items-center justify-center gap-5">
          <h3 className="text-2xl font-semibold text-gray-600">
            Click here to use 24 hour time:
          </h3>

          <label>
            <input
              type="checkbox"
              checked={is24HourFormat}
              onChange={handleChange}
              className="p-5 h-[20px] w-[20px]"
            />
          </label>
        </div>
        <hr className="text-gray-600 w-[500px] h-2" />

        <div className="flex flex-col items-center gap-5">
          <h3 className="text-black text-3xl font-semibold">
            Departure Flight
          </h3>

          <div className="flex flex-col gap-3" id="departure-container">
            {data.data.departureflights.flights.map((flight) => (
              <ReceiptFlight
                sourceID={flight.sourceid}
                destinationID={flight.destinationid}
                flightID={flight.flightid}
                planeName={flight.planename}
                departureDate={flight.departdate}
                departureTime={flight.departtime}
                arrivalDate={flight.arrivedate}
                arrivalTime={flight.arrivetime}
                airTime={flight.airtime}
                hour24Check={is24HourFormat}
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-green-500">
            Total Departure Air Time:{" "}
            {convertHour(data.data.departureflights.totalairtime)} hours
          </h3>
        </div>

        <hr className="text-gray-600 w-[500px]" />

        <div className="flex flex-col items-center gap-5">
          <h3 className="text-black text-3xl font-semibold">Return Flights</h3>

          <div className="flex flex-col gap-3" id="arrival-container">
            {data.data.returnflights.flights.map((flight) => (
              <ReceiptFlight
                sourceID={flight.sourceid}
                destinationID={flight.destinationid}
                flightID={flight.flightid}
                planeName={flight.planename}
                departureDate={flight.departdate}
                departureTime={flight.departtime}
                arrivalDate={flight.arrivedate}
                arrivalTime={flight.arrivetime}
                airTime={flight.airtime}
                hour24Check={is24HourFormat}
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-green-500">
            Total Return Air Time:
            {convertHour(data.data.returnflights.totalairtime)} hours
          </h3>
        </div>

        <hr className="text-gray-600 w-[500px]" />

        <h3 className="text-2xl font-semibold text-red-500">
          Overall Air Time: {convertHour(data.data.totalairtime)} hours
        </h3>
      </div>
    </div>
  );
};

export default Receipt;
