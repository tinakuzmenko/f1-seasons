/**
 * URL script to get list of season rounds from the server.
 * @param season:number    a season year
 * @returns {Promise<[]>}
 */
export async function getSeasonRounds(season) {
  const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
  const json = await response.json();
  return json.MRData.RaceTable.Races;
}
