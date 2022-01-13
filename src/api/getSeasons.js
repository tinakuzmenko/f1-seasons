import {getSeasonsLimit} from '../utilities/helpers';

/**
 * API script to get sorted seasons list from the server.
 * Because we don't know if races are held every year, we should get
 * this data from the backend.
 * @returns {Promise<*[]>}
 */
export async function getSeasons() {
  const response = await fetch(`https://ergast.com/api/f1/seasons.json?limit=${getSeasonsLimit()}`);
  const json = await response.json();
  return [...json.MRData.SeasonTable.Seasons].sort((a, b) => b.season - a.season);
}
