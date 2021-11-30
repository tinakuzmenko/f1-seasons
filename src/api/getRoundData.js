export async function getRoundData(season, round) {
  const response = await fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`);
  const json = await response.json();
  return json.MRData.RaceTable.Races[0];
}
