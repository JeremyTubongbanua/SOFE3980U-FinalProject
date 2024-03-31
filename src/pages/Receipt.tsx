import React from "react";
import { useLocation } from "react-router-dom";

const Receipt = () => {
  // Access the location object
  const location = useLocation();

  // Extract the data from the location.state property
  const data = location.state?.data; // Access data using optional chaining

  console.log(data);

  // ... rest of your Receipt component logic to display data
  return (
    <div className="flex flex-col items w-full p-10 gap-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-extrabold">Receipt</h1>
        <h2 className="text-2xl font-semibold">
          Thank you for using SuperCoolFlights!
        </h2>
      </div>

      <div className="flex flex-col p-5 justify-center items-center gap-5">
        <div className="flex flex-col flex-start">
          <p>Name: Jeremy Mark Tubongbanua</p>
          <p>Email: Jeremy Mark Tubongbanua</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-600">
          Transcation ID: 1231231
        </h3>

        <hr className="text-gray-600 w-4/12" />

        <div className="flex flex-col items-center ">
          <h3 className="text-black text-3xl font-semibold">
            Departure Flight
          </h3>
          <div className="flex flex-col g-3" id="departure-container"></div>
        </div>
      </div>

      {/* Display data from "data" prop */}
      <p>Name: {data.data.name}</p>
      <p>Email: {data?.email}</p>
      {/* ... display other data as needed */}
    </div>
  );
};

export default Receipt;
