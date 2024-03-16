# SOFE3980U-FinalProject

Final Project for SOFE3980U - Software Quality

# Group Members

| Name                    | Student Number |
| ----------------------- | -------------- |
| Jeremy Mark Tubongbanua | 100849092      |
| Jerry Shum              | 100845217      |
| Emily Lai               | 100825007      |
| Natasha Naorem          | 100845321      |
| Alina Mathew            | 100853412      |

# API Specification

# api-specification

## generate flights

### Request

Parameters

| Name            | Description                            | Available Values                                                                                          |
| --------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Source     | The city where the flight is from      | YYZ, YYC, YYV, YBC                                                                       |
| Destination       | The city where the flight is to        | YYZ, YYC, YYV, YBC                                                                       |
| Number of Stops | The number of stops the total trip has | 0, 1, 2                                                                                                   |
| Departure Date  | The date of the flight                 | month/days/yyyy (e.g. 12/25/2020 = december 25, 2020)                                                     |
| Return Date     | The date of the return flight          | month/days/yyyy (e.g. 12/25/2020 = december 25, 2020) OR "null", (null would imply the flight is one-way) |

Example

```json
{
  "source": "YYZ",
  "destination": "YYC",
  "numberofstops": 0,
  "departuredate": "12-25-2020",
  "returndate": "null"
}
```

### Response

```json
{
  "departureflights": [
		// A -> B
    {
      "order": 1,
      "source": "Toronto",
      "destination": "Calgary",
      "flights": [
        {
          "flightid": 1234,
          "planename": "Boeing 737",
          "departuredate": "12/25/2020",
          "departuretime": "1200",
          "arrivaldate": "12/25/2020",
          "arrivaltime": "1400",
          "totaltime": "2h"
        },
				{
          "flightid": 1234,
          "planename": "Boeing 737",
          "departuredate": "12/25/2020",
          "departuretime": "1300",
          "arrivaldate": "12/25/2020",
          "arrivaltime": "1500",
          "totaltime": "2h"
        },
      ]
    },
		// B -> C
    {
      "order": 2,
      "source": "Calgary",
      "destination": "Vancouver",
      "flights": [
        // ...
      ]
    }
  ],
  "returnflights": "null"
}
```

## generate receipt

### Request

Parameters

| Name               | Description                                        | Available Values               |
| ------------------ | -------------------------------------------------- | ------------------------------ |
| departureflightids | flight ids of departure flight path, order matters | "[1234, 5678, 91011]"          |
| returnflightids    | flight ids of return flight path, order matters    | "[121314, 151617, 181920]"     |
| name               | name of the passenger                              | "John Doe"                     |
| email              | email of the passenger                             | "jeremy.tubongbanua@gmail.com" |

Example

```json
{
	"departureflightids": "[1234, 5678, 91011]",
	"returnflightids": "null",
	"name": "John Doe",
	"email": "jremy.@gmail.com"
}
```

### Response

Example

```json
{
  "name": "John Doe",
  "email": "jremy.@gmail.com",
  "departureflights": {
    "flights": [
      {
				"order": 1,
        "flightid": 1234,
        "planename": "Boeing 737",
        "departuredate": "12/25/2020",
        "departuretime": "1200",
        "arrivaldate": "12/25/2020",
        "arrivaltime": "1400",
        "totaltime": "1h 43m"
      },
      {
				"order": 2,
        "flightid": 5678,
        "planename": "Boeing 737",
        "departuredate": "12/25/2020",
        "departuretime": "1200",
        "arrivaldate": "12/25/2020",
        "arrivaltime": "1400",
        "totaltime": "1h 43m"
      },
      {
				"order": 3,
        "flightid": 91011,
        "planename": "Boeing 737",
        "departuredate": "12/25/2020",
        "departuretime": "1200",
        "arrivaldate": "12/25/2020",
        "arrivaltime": "1400",
        "totaltime": "2h"
      }
    ]
    "totaltime": "5h 19m"
  },
	"returnflights": {
		"flights": [
			{
				"order": 1,
				"flightid": 12345,
				"planename": "Boeing 737",
				"departuredate": "12/25/2020",
				"departuretime": "1200",
				"arrivaldate": "12/25/2020",
				"arrivaltime": "1400",
				"totaltime": "1h 43m"
			}
		]
	}
}
```
