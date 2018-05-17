const cityData = [
  {
    name: "New York City",
    state: "NY",
    state_id: 32,
    station_counts: {
      total: 594,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 585,
          stations: {
            total: 294
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 7
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Los Angeles",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 1021,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 994,
          stations: {
            total: 158
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 3
        },
        CNG: {
          total: 14
        },
        LPG: {
          total: 9
        }
      }
    }
  },
  {
    name: "Chicago",
    state: "IL",
    state_id: 13,
    station_counts: {
      total: 287,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 5
        },
        ELEC: {
          total: 275,
          stations: {
            total: 93
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 6
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Houston",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 200,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 197,
          stations: {
            total: 58
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 0
        }
      }
    }
  },
  {
    name: "Philadelphia",
    state: "PA",
    state_id: 38,
    station_counts: {
      total: 94,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 85,
          stations: {
            total: 41
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 4
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "Phoenix",
    state: "AZ",
    state_id: 3,
    station_counts: {
      total: 219,
      fuels: {
        BD: {
          total: 28
        },
        E85: {
          total: 4
        },
        ELEC: {
          total: 171,
          stations: {
            total: 68
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 2
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 9
        }
      }
    }
  },
  {
    name: "San Antonio",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 73,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 70,
          stations: {
            total: 31
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "San Diego",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 416,
      fuels: {
        BD: {
          total: 3
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 400,
          stations: {
            total: 94
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "Dallas",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 144,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 136,
          stations: {
            total: 60
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 6
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "San Jose",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 526,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 4
        },
        ELEC: {
          total: 511,
          stations: {
            total: 113
          }
        },
        HY: {
          total: 2
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "Austin",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 360,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 349,
          stations: {
            total: 111
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 3
        },
        LPG: {
          total: 7
        }
      }
    }
  },
  {
    name: "Jacksonville",
    state: "FL",
    state_id: 9,
    station_counts: {
      total: 46,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 39,
          stations: {
            total: 19
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Indianapolis",
    state: "IN",
    state_id: 14,
    station_counts: {
      total: 33,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 22,
          stations: {
            total: 9
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 4
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "San Francisco",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 528,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 520,
          stations: {
            total: 171
          }
        },
        HY: {
          total: 3
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Columbus",
    state: "OH",
    state_id: 35,
    station_counts: {
      total: 74,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 63,
          stations: {
            total: 34
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 3
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Fort Worth",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 33,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 28,
          stations: {
            total: 13
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Charlotte",
    state: "NC",
    state_id: 33,
    station_counts: {
      total: 131,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 124,
          stations: {
            total: 40
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 1
        },
        CNG: {
          total: 3
        },
        LPG: {
          total: 3
        }
      }
    }
  },
  {
    name: "Detroit",
    state: "MI",
    state_id: 22,
    station_counts: {
      total: 168,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 164,
          stations: {
            total: 51
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "El Paso",
    state: "TX",
    state_id: 43,
    station_counts: {
      total: 27,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 24,
          stations: {
            total: 12
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 1
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Memphis",
    state: "TN",
    state_id: 42,
    station_counts: {
      total: 29,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 25,
          stations: {
            total: 13
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Boston",
    state: "MA",
    state_id: 20,
    station_counts: {
      total: 512,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 499,
          stations: {
            total: 158
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 1
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Seattle",
    state: "WA",
    state_id: 47,
    station_counts: {
      total: 526,
      fuels: {
        BD: {
          total: 16
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 501,
          stations: {
            total: 149
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 4
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Denver",
    state: "CO",
    state_id: 6,
    station_counts: {
      total: 222,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 213,
          stations: {
            total: 76
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 6
        }
      }
    }
  },
  {
    name: "Washington",
    state: "MD",
    state_id: 21,
    station_counts: {
      total: 450,
      fuels: {
        BD: {
          total: 8
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 432,
          stations: {
            total: 154
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Nashville",
    state: "TN",
    state_id: 42,
    station_counts: {
      total: 6,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 5,
          stations: {
            total: 3
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Baltimore",
    state: "MD",
    state_id: 21,
    station_counts: {
      total: 338,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 326,
          stations: {
            total: 115
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 3
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Louisville",
    state: "KY",
    state_id: 17,
    station_counts: {
      total: 47,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 9
        },
        ELEC: {
          total: 37,
          stations: {
            total: 21
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Portland",
    state: "OR",
    state_id: 37,
    station_counts: {
      total: 282,
      fuels: {
        BD: {
          total: 8
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 268,
          stations: {
            total: 91
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Oklahoma",
    state: "OK",
    state_id: 27,
    station_counts: {
      total: 31,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 13,
          stations: {
            total: 5
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 10
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Milwaukee",
    state: "WI",
    state_id: 49,
    station_counts: {
      total: 70,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 4
        },
        ELEC: {
          total: 59,
          stations: {
            total: 23
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "LasVegas",
    state: "NV",
    state_id: 28,
    station_counts: {
      total: 204,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 6
        },
        ELEC: {
          total: 190,
          stations: {
            total: 60
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 3
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Albuquerque",
    state: "NM",
    state_id: 23,
    station_counts: {
      total: 38,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 29,
          stations: {
            total: 14
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Tucson",
    state: "AZ",
    state_id: 3,
    station_counts: {
      total: 52,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 43,
          stations: {
            total: 25
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 4
        },
        LPG: {
          total: 3
        }
      }
    }
  },
  {
    name: "Fresno",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 58,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 51,
          stations: {
            total: 13
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "Sacramento",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 467,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 7
        },
        ELEC: {
          total: 449,
          stations: {
            total: 94
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 1
        },
        CNG: {
          total: 4
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "LongBeach",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 180,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 169,
          stations: {
            total: 53
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 3
        },
        CNG: {
          total: 6
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Kansas",
    state: "MO",
    state_id: 25,
    station_counts: {
      total: 486,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 476,
          stations: {
            total: 90
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 1
        },
        CNG: {
          total: 6
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Mesa",
    state: "AZ",
    state_id: 3,
    station_counts: {
      total: 45,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 0
        },
        ELEC: {
          total: 39,
          stations: {
            total: 15
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 6
        }
      }
    }
  },
  {
    name: "VirginiaBeach",
    state: "VA",
    state_id: 46,
    station_counts: {
      total: 30,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 29,
          stations: {
            total: 13
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 0
        }
      }
    }
  },
  {
    name: "Atlanta",
    state: "GA",
    state_id: 10,
    station_counts: {
      total: 371,
      fuels: {
        BD: {
          total: 2
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 360,
          stations: {
            total: 107
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "ColoradoSprings",
    state: "CO",
    state_id: 6,
    station_counts: {
      total: 62,
      fuels: {
        BD: {
          total: 2
        },
        E85: {
          total: 14
        },
        ELEC: {
          total: 41,
          stations: {
            total: 17
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 3
        }
      }
    }
  },
  {
    name: "Raleigh",
    state: "NC",
    state_id: 33,
    station_counts: {
      total: 178,
      fuels: {
        BD: {
          total: 4
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 167,
          stations: {
            total: 61
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 5
        }
      }
    }
  },
  {
    name: "Omaha",
    state: "NE",
    state_id: 27,
    station_counts: {
      total: 35,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 4
        },
        ELEC: {
          total: 25,
          stations: {
            total: 10
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 5
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Miami",
    state: "FL",
    state_id: 9,
    station_counts: {
      total: 168,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 3
        },
        ELEC: {
          total: 162,
          stations: {
            total: 66
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Oakland",
    state: "CA",
    state_id: 5,
    station_counts: {
      total: 273,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 264,
          stations: {
            total: 58
          }
        },
        HY: {
          total: 4
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Tulsa",
    state: "OK",
    state_id: 36,
    station_counts: {
      total: 30,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 20,
          stations: {
            total: 6
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 6
        },
        LPG: {
          total: 3
        }
      }
    }
  },
  {
    name: "Minneapolis",
    state: "MN",
    state_id: 23,
    station_counts: {
      total: 159,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 17
        },
        ELEC: {
          total: 141,
          stations: {
            total: 54
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 1
        }
      }
    }
  },
  {
    name: "Cleveland",
    state: "OH",
    state_id: 35,
    station_counts: {
      total: 27,
      fuels: {
        BD: {
          total: 0
        },
        E85: {
          total: 1
        },
        ELEC: {
          total: 22,
          stations: {
            total: 10
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 0
        },
        LPG: {
          total: 4
        }
      }
    }
  },
  {
    name: "Wichita",
    state: "KS",
    state_id: 16,
    station_counts: {
      total: 19,
      fuels: {
        BD: {
          total: 1
        },
        E85: {
          total: 4
        },
        ELEC: {
          total: 11,
          stations: {
            total: 6
          }
        },
        HY: {
          total: 0
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 1
        },
        LPG: {
          total: 2
        }
      }
    }
  },
  {
    name: "Arlington",
    state: "VA",
    state_id: 43,
    station_counts: {
      total: 460,
      fuels: {
        BD: {
          total: 5
        },
        E85: {
          total: 2
        },
        ELEC: {
          total: 448,
          stations: {
            total: 162
          }
        },
        HY: {
          total: 1
        },
        LNG: {
          total: 0
        },
        CNG: {
          total: 2
        },
        LPG: {
          total: 2
        }
      }
    }
  }
];

module.exports = cityData;
