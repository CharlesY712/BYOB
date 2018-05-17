# BYOB [![Build Status](https://travis-ci.org/CharlesY712/BYOB.svg?branch=master)](https://travis-ci.org/CharlesY712/BYOB)


## Endpoints available: 
### GET all the states
/api/v1/states

Example response:
```
[
    {
        "id": 857,
        "state": "AL",
        "numberOfStations": 331,
        "created_at": "2018-05-16T21:05:58.865Z",
        "updated_at": "2018-05-16T21:05:58.865Z"
    }, ...
]
```

### Query station search
/api/v1/states?numberOfStations=#

Example response:
```
[
    {
        "id": 857,
        "state": "AL",
        "numberOfStations": 331,
        "created_at": "2018-05-16T21:05:58.865Z",
        "updated_at": "2018-05-16T21:05:58.865Z"
    }
]
```
### GET one state
/api/v1/states/:id

Example response:
```
[
    {
        "id": 857,
        "state": "AL",
        "numberOfStations": 331,
        "created_at": "2018-05-16T21:05:58.865Z",
        "updated_at": "2018-05-16T21:05:58.865Z"
    }
]
```
### GET all the cities
/api/v1/cities

Example response:
```
[
    {
        "id": 404,
        "city": "New York City",
        "BD": 1,
        "CNG": 7,
        "E85": 0,
        "ELEC": 585,
        "HY": 0,
        "LNG": 0,
        "LPG": 1,
        "state_id": 888,
        "created_at": "2018-05-16T21:05:58.903Z",
        "updated_at": "2018-05-16T21:05:58.903Z"
    }, ...
 ]
```
### GET one city
/api/v1/cities/:id

Example response:
```
[
    {
        "id": 404,
        "city": "New York City",
        "BD": 1,
        "CNG": 7,
        "E85": 0,
        "ELEC": 585,
        "HY": 0,
        "LNG": 0,
        "LPG": 1,
        "state_id": 888,
        "created_at": "2018-05-16T21:05:58.903Z",
        "updated_at": "2018-05-16T21:05:58.903Z"
    }
 ]
```
### POST a new state
/api/v1/states
parameters (all required): 
  *state: string,
  *numberOfStations: number

### POST a new city
/api/v1/cities
parameters (all required):
 *city: string,
 *BD: number,
 *CNG: number,
 *E85: number,
 *ELEC: number,
 *HY: number,
 *LNG: number,
 *LPG: number,

### PATCH a state 
/api/v1/states/:id
parameters (at least one required):
  *state: 'WI'
  AND/OR
  *numberOfStations: '29'    

### PATCH a city
/api/v1/cities/:id
parameters (at least one required):
   *city: string
   AND/OR
   *BD: number
   AND/OR
   *CNG: number
   AND/OR
   *E85: number
   AND/OR
   *ELEC: number
   AND/OR
   *HY: number
   AND/OR
   *LNG: number
   AND/OR
   *LPG: number

### DELETE a state
/api/v1/states/:id

### DELETE a city
/api/v1/cities/:id
