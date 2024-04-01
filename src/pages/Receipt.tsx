import React from "react";
import { useLocation } from "react-router-dom";
import ReceiptFlight from "../components/ReceiptFlight";

const Receipt = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);

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
                totalFlightTime={flight.arrivetime - flight.departureTime}
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-green-500">
            Total Air Time: {data.data.departureflights.totalairtime}
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
                totalFlightTime={flight.arrivetime - flight.departureTime}
              />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-green-500">
            Total Air Time: {data.data.departureflights.totalairtime}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
