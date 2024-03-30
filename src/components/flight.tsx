import React from "react";
import "./flight.css";

interface FlightProps {
  flightID: string;
  planeName: string;
  departureTime: string;
  arrivalTime: string;
  totalFlightTime: string;
}

const Flight: React.FC<FlightProps> = ({
  flightID,
  planeName,
  departureTime,
  arrivalTime,
  totalFlightTime,
}) => {
  return (
    <div className="flightBox flex items-start border rounded-xl border-black text-black text-lg font-semibold leading-7">
      <p className="box self-stretch">
        Flight ID: <br />
        {flightID}
      </p>
      <p className="box self-stretch">
        Plane Name: <br />
        {planeName}
      </p>
      <p className="box self-stretch">
        Departure Time: <br />
        {departureTime}
      </p>
      <p className="box self-stretch">
        Arrival Time: <br />
        {arrivalTime}
      </p>
      <p className="box self-stretch">
        Total Flight Time: <br />
        {totalFlightTime}
      </p>
      <div className="box">
        <label>
          <input type="radio" name="flightSelection" />
          Select
        </label>
      </div>
    </div>
  );
};

export default Flight;
