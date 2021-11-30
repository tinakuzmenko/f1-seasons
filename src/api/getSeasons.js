const FIRST_SEASON_YEAR = 1950;

export async function getSeasons() {
  const currentYear = (new Date()).getFullYear();
  const limit = currentYear - FIRST_SEASON_YEAR + 1;

  const response = await fetch(`https://ergast.com/api/f1/seasons.json?limit=${limit}`);
  const json = await response.json();
  return [...json.MRData.SeasonTable.Seasons].sort((a, b) => b.season - a.season);
}
