import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LandingPage() {
  const fromOptions = ["YYZ", "YYC", "YVR", "YOO"];
  const toOptions = ["YYZ", "YYC", "YVR", "YOO"];
  // const cabinClassOptions = ["Economy", "Business", "First Class"];

  const [isRoundTrip, setisRoundTrip] = useState(false);
  const [numFlights, setNumFlights] = useState(2);
  const handleRoundTripChange = () => {
    setisRoundTrip(!isRoundTrip);
  };
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const increaseAdultCount = () => {
    setAdultCount((count) => count + 1);
  };

  const decreaseAdultCount = () => {
    if (adultCount > 0) {
      setAdultCount((count) => count - 1);
    }
  };

  const increaseChildCount = () => {
    setChildCount((count) => count + 1);
  };

  const decreaseChildCount = () => {
    if (childCount > 0) {
      setChildCount((count) => count - 1);
    }
  };

  const reset = () => {
    setAdultCount(0);
    setChildCount(0);
  };

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="flex flex-col gap-5 items-center p-10">
      <h1 className="text-4xl font-bold ">Search For Your Flights</h1>

      {/* Overall Container*/}
      <div className="flex flex-col p-5 gap-5 items-start ">
        {/* Flight Details */}
        <div className="w-full border-2 border-black rounded-xl p-5">
          <h2 className="text-2xl font-semibold">Flight Details</h2>
          <div className="mt-2 flex items-start justify-center gap-20">
            <div>
              <p className="text-gray-600 text-md font-semibold">
                Departing from:
              </p>
              <Dropdown
                options={[...fromOptions]}
                onSelect={(selectedOption) => console.log(selectedOption)}
              />
            </div>
            <div>
              <p className="text-gray-600 text-md font-semibold">
                Destination:
              </p>
              <Dropdown
                options={[...toOptions]}
                onSelect={(selectedOption) => console.log(selectedOption)}
              />
            </div>
          </div>
        </div>

        {/* Direct / Round Trip */}
        <div className="w-full flex items-center gap-20">
          <div className="flex flex-col items-start gap-2 p-5 ">
            <h2 className="text-2xl font-semibold"> Round Trip</h2>

            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!isRoundTrip}
                  onChange={handleRoundTripChange}
                />
                <span className="text-gray-600 text-md font-semibold">
                  No, I am not booking a round trip.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isRoundTrip}
                  onChange={handleRoundTripChange}
                />
                <span className="text-gray-600 text-md font-semibold">
                  Yes, I am booking a round trip.
                </span>
              </div>
            </div>
          </div>

          {/* If yes, select # of flights */}
          {isRoundTrip && (
            <div>
              <label className="flex flex-col items-start justify-start">
                <h3 className="text-gray-600 text-md font-semibold mb-3">
                  Number of Stops:
                </h3>
                <input
                  type="number"
                  value={numFlights}
                  onChange={(event) => setNumFlights(event.target.value)}
                  min={2}
                  max={5}
                  className="w-16 p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
          )}
        </div>

        {/* Departure & Return */}
        <div>
          <div className="border-2 border-black rounded-xl p-5">
            <div className="flex text-xl justify-center text-center">
              Select your date(s):
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem",
              }}
            >
              <div style={{ flex: 1, padding: "1rem" }}>
                <DatePicker
                  className="text-center border-2 border-gray text-black font-semibold rounded"
                  selectsStart
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                />
              </div>
              <div style={{ flex: 1, padding: "1rem" }}>
                {isRoundTrip && (
                  <DatePicker
                    className="text-center border-2 border-gray text-black font-semibold rounded"
                    selectsEnd
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button
            type="button"
            onClick={hasFormSubmit}
            className="mt-4 bg-black text-white font-extrabold hover:bg-white hover:text-black rounded px-3 mr-2"
          >
            {" "}
            View Flights{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
