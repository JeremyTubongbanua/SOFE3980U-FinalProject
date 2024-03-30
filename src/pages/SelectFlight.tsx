import React from "react";
import Flight from "../components/flight";
import Checkout from "../components/Checkout";

const SelectFlight: React.FC<Props> = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here

    // Redirect to another page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full p-20 gap-20 items-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-black text-5xl font-extrabold leading-10">
            Departure Flights
          </h1>

          <div className="mt-5 flex flex-col justify-center items-start p-5 gap-10">
            <h3 className="text-black text-2xl font-semibold leading-8">
              Departure Flights <br /> A &rarr; B
            </h3>

            <fieldset className="flex flex-col gap-5" name="departures">
              <Flight />
              <Flight />
              <Flight />
              <Flight />
            </fieldset>
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
              Return Flights <br /> B &rarr; A
            </h3>

            <fieldset className="flex flex-col gap-5" name="returns">
              <Flight
                flightID="1245"
                planeName="meowplane"
                departureTime="2"
                arrivalTime="2"
                totalFlightTime="4"
                withCheckBox={true}
              />
              <Flight withCheckBox={true} />
              <Flight withCheckBox={true} />
              <Flight withCheckBox={true} />
            </fieldset>
          </div>
        </div>

        {/* ----------------------- */}
        <hr className="text-black w-9/12 " />
        <Checkout />
      </div>
    </form>
  );
};

export default SelectFlight;
