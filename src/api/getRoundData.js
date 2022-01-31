/**
 * API script to get a list of all races in a single round from the server.
 * @param season:number   A season year
 * @param round:string    A season round number
 * @returns {Promise<[]>}
 */
export async function getRoundData(season, round) {
  const response = await fetch(
    `https://ergast.com/api/f1/${season}/${round}/results.json`,
  );
  const json = await response.json();
  return json.MRData.RaceTable.Races[0];
}
