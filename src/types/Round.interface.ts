export interface LocationInterface {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface CircuitInterface {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: LocationInterface;
}

interface DriverInterface {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface ConstructorInterface {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface FastestLapInterface {
  rank: string;
  lap: string;
  Time: {
    time: string;
  };
  AverageSpeed: {
    units: string;
    speed: string;
  };
}

interface ResultInterface {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: DriverInterface;
  Constructor: ConstructorInterface;
  grid: string;
  laps: string;
  status: string;
  Time: {
    millis: string;
    time: string;
  };
  FastestLap: FastestLapInterface;
}

export interface RaceInterface {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: CircuitInterface;
  date: string;
  time: string;
  Results: ResultInterface[];
}

export interface RoundInterface {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round: string;
      Races: RaceInterface[];
    };
  };
}
