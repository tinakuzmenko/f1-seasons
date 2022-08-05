export interface DriverInterface {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriverResponseInterface {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      circuitId: string;
      constructorId: string;
      Drivers: DriverInterface[];
    };
  };
}
