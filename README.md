

## get flight

GET /getflight

### Request

| Name | Description | Avaialble Values | 
| ---- | ----------- | ----------------- |
| flightid | The id of the flight | e.g. 1 (int) |

Example

```json
{
  'flightid': 1
}
```

### Response

Returns a flight object

Example

```json
{
  "status": "success",
  "data": {
      "flightid": 1,
      "planename": "Boeing 747",
      "departdate": "2020-01-01",
      "departtime": 500,
      "arrivedate": "2020-01-01",
      "arrivetime": 1400,
      "sourceid": "YYZ",
      "destinationid": "YYC"
  }
}
```

## calculate air time

GET /calculateairtime

### Request

<<<<<<< Updated upstream
| Name | Description | Available Values |
| ---- | ----------- | ----------------- |
| flightids | The ids of the flight | e.g. [1,2] (array of int) |
=======
| Name | Description | Avaialble Values |
| ---- | ----------- | ----------------- |
| flightids | The ids of the flights | e.g. [1, 2] (array of ints) |

Example

`http://jeremymark.ca:3001/calculateairtime?flightids=[560,704]`
>>>>>>> Stashed changes

### Response

Example

```json
{
    "status": "success",
<<<<<<< Updated upstream
    "data": 1400
}
```

=======
    "data": 900
}
```
>>>>>>> Stashed changes

## generate options

GET /generateoptions

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

GET /generatereceipt

### Request

Parameters

| Name               | Description                                        | Available Values               |
| ------------------ | -------------------------------------------------- | ------------------------------ |
| departureflightids | flight ids of departure flight path, order matters | "[1234, 5678, 91011]"          |
| returnflightids    | flight ids of return flight path, order matters    | "[121314, 151617, 181920]"     |
| name               | passenger name	                                  | "John Doe"                     |
| email              | passenger email                                    | "jeremy.tubongbanua@gmail.com" |

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
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
