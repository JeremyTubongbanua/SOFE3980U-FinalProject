import React from "react";
import "./flight.css";

interface FlightProps {
  flightID: string;
  planeName: string;
  departureTime: string;
  arrivalTime: string;
  totalFlightTime: string;
  withCheckBox: boolean;
}

const Flight: React.FC<FlightProps> = ({
  flightID,
  planeName,
  departureTime,
  arrivalTime,
  totalFlightTime,
  withCheckBox,
}) => {
  return (
    <div className="flightBox flex items-start border rounded-xl border-black text-black text-lg font-semibold leading-7">
      <p className="box self-stretch">
        Flight ID: <br />
        <span className=" text-gray-500">{flightID}</span>
      </p>
      <p className="box self-stretch">
        Plane Name: <br />
        <span className=" text-gray-500">{planeName}</span>
      </p>
      <p className="box self-stretch">
        Departure Time: <br />
        <span className=" text-gray-500">{departureTime}</span>
      </p>
      <p className="box self-stretch">
        Arrival Time: <br />
        <span className=" text-gray-500">{arrivalTime}</span>
      </p>
      <p className="box self-stretch">
        Total Flight Time: <br />
        <span className=" text-gray-500">{totalFlightTime}</span>
      </p>

      {withCheckBox ? (
        <div className="box">
          <label>
            <input type="checkbox" value={flightID} />
            &nbsp; Select
          </label>
        </div>
      ) : (
        <div className="box">
          <label>
            <input type="radio" name="flightSelection" value={flightID} />
            &nbsp; Select
          </label>
        </div>
      )}
    </div>
  );
};

export default Flight;
