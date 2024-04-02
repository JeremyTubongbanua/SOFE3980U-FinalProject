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

  const [selectedFrom, setSelectedFrom] = useState(fromOptions[0]);
  const [selectedTo, setSelectedTo] = useState(toOptions[0]);

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

  const onViewFlightsPress = () => {
    // alert('sourceid: ' + selectedFrom + ' destination: ' + selectedTo + ' start date: ' + startDate + ' end date: ' + endDate + ' round trip: ' + isRoundTrip + ' number of flights: ' + numFlights);

    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const startYear = startDate.getFullYear();
    const kStartMonth = startYear + '-' + startMonth + '-' + startDay;

    let url = 'http://jeremymark.ca:3001/generateoptions?source=' + selectedFrom + '&destination=' + selectedTo + '&departuredate=' + kStartMonth + '&numberofstops=' + numFlights;

    if(endDate != null) {
      const endMonth = endDate.getMonth() + 1;
      const endDay = endDate.getDate();
      const endYear = endDate.getFullYear();
      const kEndMonth = endYear + '-' + endMonth + '-' + endDay;
      url = url + '&returndate=' + kEndMonth;
    }

    // alert(url);
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(json => {
      // alert(json);
      console.log(json);

      if(json.status == 'success') {
        if(json.departPaths.length == 0 && json.returnPaths.length == 0) {
          alert('No flights found for the given criteria');
        } else {
          // navigate('/selectflights', {state: {departPaths: json.departPaths, returnPaths: json.returnPaths}});
        }
      }
    })
    .catch(error => {
      alert(error);
    });

  }

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
                onSelect={(selectedOption) => setSelectedFrom(selectedOption)}
              />
            </div>
            <div>
              <p className="text-gray-600 text-md font-semibold">
                Destination:
              </p>
              <Dropdown
                options={[...toOptions]}
                onSelect={(selectedOption) => setSelectedTo(selectedOption)}
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
          <div className="w-full border-2 border-black rounded-xl p-5 flex flex-col gap-5 items-start">
            <h2 className="text-black text-2xl font-semibold">
              Select your date(s):
            </h2>

            <div className="flex items-start just gap-10">
              <div>
                <h3 className="text-gray-600 text-md font-semibold">
                  Departure Date
                </h3>
                <DatePicker
                  className="text-center border-2 border-gray text-black font-semibold rounded"
                  selectsStart
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                />
              </div>
              <div>
                {isRoundTrip && (
                  <div>
                    <h3 className="text-gray-600 text-md font-semibold">
                      Return Date
                    </h3>
                    <DatePicker
                      className="text-center border-2 border-gray text-black font-semibold rounded"
                      selectsEnd
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      endDate={endDate}
                      startDate={startDate}
                      minDate={startDate}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onViewFlightsPress()}
            className="flex flex-col justify-center items-center p-3 w-full self-stretch border rounded-xl bg-black text-white text-xl font-semibold mt-8 hover:bg-gray-600 duration-200"
          >
            View Flights
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
