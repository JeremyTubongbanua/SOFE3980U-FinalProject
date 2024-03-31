import React, { useState, useEffect } from "react";
import Flight from "../components/flight";
import Checkout from "../components/Checkout";
import { useNavigate } from "react-router-dom";

const SelectFlight: React.FC<Props> = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(
      "http://jeremymark.ca:3001/generatereceipt?departureflightids=[1,2,3]&returnflightids=[8]&name=John Doe&email=johndoe@gmail.com"
    )
      .then((response) => response.json())
      .then((json) => {
        // Redirect to the new page with the fetched data
        console.log(json);
        navigate("/receipt", { state: { data: json } });
      })
      .catch((error) => console.error(error));
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
