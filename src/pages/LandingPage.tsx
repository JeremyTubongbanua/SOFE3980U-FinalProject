import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LandingPage() {
  const fromOptions = ["YYZ", "YYC", "YVR", "YOO"];
  const toOptions = ["YYZ", "YYC", "YVR", "YOO"];
  // const cabinClassOptions = ["Economy", "Business", "First Class"];
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isDirectFlight, setIsDirectFlight] = useState(false);
  const [numFlights, setNumFlights] = useState(2);
  const handleDirectFlightChange = () => {
    setIsDirectFlight(!isDirectFlight);
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
    <div className="container mx-auto justify-center">
      <h1 className="text-3xl font-bold mt-3 mb-4 min-w-full flex flex-col items-center">
        Ready to travel around the globe?
      </h1>
      <h2 className="text-xl mb-2 min-w-full flex flex-col items-center">
        Search for flights for your next adventure!
      </h2>

      <div className="flightDetails py-10 px-10 mx-auto min-w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-3">Flight Details</h2>

        <div className="details text-xl inline-grid gap-8 grid-cols-2 border-2 border-black px-5 rounded ">
          <div className="where my-4">
            <div className="from">Where are you departing from?</div>
            <Dropdown
              options={[...fromOptions]}
              onSelect={(selectedOption) => console.log(selectedOption)}
            />
          </div>

          <div className="where my-4">
            <div className="from">Where are you heading to?</div>
            <Dropdown
              options={[...toOptions]}
              onSelect={(selectedOption) => console.log(selectedOption)}
            />
          </div>

          <div className="where my-4">
            <div className="from">Direct Flight?</div>
            <div className="mx-4">
              <input
                type="checkbox"
                checked={!isDirectFlight}
                onChange={handleDirectFlightChange}
                className="mr-2"
              />
              <span>No</span>
            </div>
            <div className="mx-4">
              <input
                type="checkbox"
                checked={isDirectFlight}
                onChange={handleDirectFlightChange}
                className="mr-2"
              />
              <span>Yes</span>
            </div>
          </div>

          {isDirectFlight && (
            <div className="my-4">
              <label className="block">
                <h3 className="numflight">Number of Stops:</h3>
                <input
                  type="number"
                  value={numFlights}
                  onChange={(event) => setNumFlights(event.target.value)}
                  min={2}
                  max={5}
                  className="w-16 p-2 border border-gray-300 rounded-md mx-4"
                />
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="text-xl mx-auto max-w-xl">
        <div className="border-2 border-black rounded px-3">
          <div style={{ fontSize: "1rem", textAlign: "center" }}>
            <div style={{ display: "inline-block", maxWidth: "600px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.0rem",
                }}
              >
                <div style={{ flex: 1, padding: "1rem" }}>
                  <div className="flex text-xl">Number of Passengers</div>
                  <div className="passenger-options">
                    <div className="passenger-option">
                      <label className="inline-block mr-2">
                        Adults (Age 16+) -
                      </label>

                      <div className="btn-container inline-block ml-2">
                        <button
                          className="control_btn px-5"
                          onClick={decreaseAdultCount}
                        >
                          -
                        </button>
                        <span className="counter_output">{adultCount}</span>
                        <button
                          className="control_btn px-5"
                          onClick={increaseAdultCount}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="passenger-option">
                      <label className="inline-block mr-2">
                        Children (Age 0 to 15) -
                      </label>

                      <div className="btn-container inline-block ml-2">
                        <button
                          className="control-btn px-5"
                          onClick={decreaseChildCount}
                        >
                          -
                        </button>
                        <span className="counter_output">{childCount}</span>
                        <button
                          className="control-btn px-5"
                          onClick={increaseChildCount}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={reset}
                      className=" bg-black text-white px-2 mt-3 rounded justify-center items-center"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div style={{ flex: 1, padding: "1rem" }}>
                  <div className="flex text-xl mt-0">
                    One way or Round trip?
                  </div>
                  <label className="block">
                    <input
                      type="checkbox"
                      checked={isRoundTrip}
                      onChange={() => setIsRoundTrip(!isRoundTrip)}
                      className="mr-2"
                    />
                    <span className="mr-4">I am booking a Round Trip</span>
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      checked={!isRoundTrip}
                      onChange={() => setIsRoundTrip(!isRoundTrip)}
                      className="mr-2"
                    />
                    <span>I am booking a One-way Trip</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex text-xl justify-center text-center">
              {" "}
              Select your date(s):{" "}
            </div>

            <div style={{ fontSize: "1rem", textAlign: "center" }}>
              <div style={{ display: "inline-block", maxWidth: "600px" }}>
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
