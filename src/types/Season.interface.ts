export interface TableSeasonInterface {
  season: string;
  url: string;
}

export interface SeasonInterface {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    SeasonTable: {
      constructorId: string;
      driverId: string;
      Seasons: TableSeasonInterface[];
    };
  };
}
