import React, { useState, useEffect } from "react";
import Flight from "../components/flight";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FlightBox from "../components/FlightBox";

const SelectFlight: React.FC<Props> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const [selectedDepartureFlightIds, setSelectedDepartureFlightIds] = useState([]);
  const [selectedReturnFlightIds, setSelectedReturnFlightIds] = useState([]);

  function convertToTime(timeNumber) {
    const hours = Math.floor(timeNumber / 100);
    const minutes = timeNumber % 100;

    // Validate the input for hours and minutes
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return "Invalid time format";
    }

    // Determine AM/PM
    const amPm = hours >= 12 ? "pm" : "am";

    // Convert hours to 12-hour format, adjusting for "0"
    let formattedHours = (hours % 12 || 12).toString(); // Convert to string

    // Format hours and minutes with leading zeros
    formattedHours = formattedHours.padStart(2, "0"); // Apply padStart method
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // Construct the final time string
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  }

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let url = "http://jeremymark.ca:3001/generatereceipt?name=" +
    nameValue +
    "&email=" +
    emailValue;
    url += '&departureflightids=[';
    url += selectedDepartureFlightIds.join(',');
    url += ']';
      url += '&returnflightids=[';
      url += selectedReturnFlightIds.join(',');
      url += ']';
    console.log(url);
    fetch(
      url
    )
      .then((response) => response.json())
      .then((json) => {
        // Redirect to the new page with the fetched data
        console.log(json);
        navigate("/receipt", { state: { data: json } });
      })
      .catch((error) => console.error(error));
  };

  const [departDataAirTimes, setDepartDataAirTimes] = useState([]);
  const [returnDataAirTimes, setReturnDataAirTimes] = useState([]);
  
  const departData = location.state?.departPaths;
  const returnData = location.state?.returnPaths;
  
  useEffect(() => {
    const departData = location.state?.departPaths;
departData.map((flights) =>  {
      let url = 'http://jeremymark.ca:3001/calculateairtime?flightids=[';
      let flightids = flights.map(flight => flight.flightid).join(',');
      url += flightids;
      url += ']';
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          const totalFlightTime = json.data;
          setDepartDataAirTimes((prevState, props) => {
            return [...prevState, totalFlightTime];
          
          });
        })
        .catch((error) => console.error(error));
      })
      console.log('departdads: ' + departDataAirTimes);
  }, []);

  useEffect(() => {
    const returnData = location.state?.returnPaths;

      if(returnData.length !== 0) {
        returnData.map((flights) =>  {
          let url = 'http://jeremymark.ca:3001/calculateairtime?flightids=[';
          let flightids = flights.map(flight => flight.flightid).join(',');
          url += flightids;
          url += ']';
          console.log(url);
          fetch(url)
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              const totalFlightTime = json.data;
              setReturnDataAirTimes((prevState, props) => {
                return [...prevState, totalFlightTime];
              });
            })
            .catch((error) => console.error(error));
          })
      }
  }, []);
  
  

  console.log(returnData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full p-20 gap-20 items-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-black text-5xl font-extrabold leading-10">
            Departure Flights
          </h1>

          <div className="mt-5 flex flex-col justify-center items-start p-5 gap-10">
            <h3 className="text-black text-2xl font-semibold leading-8">
              Departure Flights <br /> {departData[0][0].sourceid} &rarr; {departData[departData.length-1][(departData[departData.length-1]).length-1].destinationid}
            </h3>

            <fieldset className="flex flex-col gap-5" name="departureOption">
              {departData.map((flights, index) => {
                  return (
                    <div>
                      <span>
                        <h5>Option {index+1}</h5>
                        <h4 key={flights[0].flightid + 'a'}>Total Flight Time: {departDataAirTimes[index]}</h4>
                      </span>
                      <div>
                        <input type="radio" id={'option-' + (index+1)} name="departureOption" onClick={
                          () => {
                            setSelectedDepartureFlightIds((prevState, props) => {
                              return [flights.map(flight => flight.flightid)];
                            })
                          }
                        }
                        
                        />
                        <label htmlFor={'option-' + (index+1)}>Option {index+1}</label>
                      </div>
                      <FlightBox
                        flights={flights}
                        key={flights[0].flightid}
                      />
                      <br />
                    </div>
                  );
          })}
            </fieldset>
          </div>
        </div>

        {/* ------------------------------------------------------ */}
        <hr className="text-black w-9/12 " />

        {returnData.length !== 0 && (
          <div>
            <div className="flex flex-col items-center">
              <h1 className=" text-black text-5xl font-extrabold leading-10">
                Return Flights
              </h1>
              <div className="mt-5 flex flex-col justify-center items-start p-5 gap-10">
                <h3 className="text-black text-2xl font-semibold leading-8">
                  Return Flights <br /> B &rarr; A
                </h3>

                <fieldset className="flex flex-col gap-5" name="returns">
                  {returnData.map((flights, index) => {
                    return (
                      <div>
                        <span>
                          <h5>Option {index+1}</h5>
                          <h4>Total Flight Time: {returnDataAirTimes[index]}</h4>
                        </span>
                        <input type="radio" id={'option-' + (index+1)} name="returns" onClick={
                          () => {
                            setSelectedReturnFlightIds((prevState, props) => {
                              return [flights.map(flight => flight.flightid)];
                            })
                          }
                        }/>
                        <label htmlFor={'option-' + (index+1)}></label>
                      <FlightBox
                        flights={flights}
                        key={flights[0].flightid}
                        />
                        <br />
                      </div>
                    );
                  })}
                </fieldset>
              </div>
            </div>
            {/* ----------------------- */}
            <hr className="text-black w-9/12 " />
          </div>
        )}

        {/* Checkout: */}
        <div>
          <div className=" flex flex-col p-5 items-center gap-5 ">
            <h3 className=" font-semibold text-black text-2xl">Checkout</h3>
            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="fullname"
              >
                Full Name:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="fullname"
                required
                value={nameValue}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="email"
                id="email"
                required
                value={emailValue}
                onChange={handleEmailChange}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white text-lg font-semibold border rounded-xl p-2 w-[200px] hover:bg-gray-600 duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SelectFlight;
