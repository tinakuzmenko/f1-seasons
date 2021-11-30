export async function getSeasonRounds(season) {
  const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
  const json = await response.json();
  return json.MRData.RaceTable.Races;
}
