import React from "react";
import Flight from "../components/flight";
import Checkout from "../components/Checkout";

const SelectFlight: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-full p-20 gap-20 items-center">
      <div className="flex flex-col items-center">
        <h1 className=" text-black text-5xl font-extrabold leading-10">
          Departure Flights
        </h1>

        <div className="mt-5 flex flex-col justify-center items-start p-5 gap-10">
          <h3 className="text-black text-2xl font-semibold leading-8">
            Departure Flights <br /> A &rarr; B
          </h3>

          <div className="flex flex-col gap-5">
            <Flight />
            <Flight />
            <Flight />
            <Flight />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      <hr className="text-black w-9/12 " />

      <div className="flex flex-col items-center">
        <h1 className=" text-black text-5xl font-extrabold leading-10">
          Return Flights
        </h1>

        <div className="mt-5 flex flex-col justify-center items-start p-5 gap-10">
          <h3 className="text-black text-2xl font-semibold leading-8">
            Return Flights <br /> A &rarr; B
          </h3>

          <div className="flex flex-col gap-5">
            <Flight />
            <Flight />
            <Flight />
            <Flight />
          </div>
        </div>
      </div>

      {/* ----------------------- */}

      <Checkout />
    </div>
  );
};

export default SelectFlight;
