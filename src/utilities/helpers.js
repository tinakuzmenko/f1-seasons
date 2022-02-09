/**
 * A file with reusable helper functions, that can be used across the application
 */

// dependencies
import dayjs from 'dayjs';

/**
 * A utility function to get a date in formatted human-readable
 * string representation
 * @param date:string     A date in string representation
 * @param format:string   A string format compatible with dayjs library
 *                        (@see https://day.js.org/)
 * @returns string
 */
export const getFormattedDate = (date, format) => dayjs(date).format(format);

/**
 * A utility function to get the endpoint link.
 * @param type:string     A string with the type of endpoint we need.
 *                        Possible values are: 'seasons', 'driver', 'rounds',
 *                        'round'.
 * @param params:mixed    Additional params that should be added to the link.
 * @returns string        A constructed link in string representation.
 */
export const constructEndpoint = (type, ...params) => {
  const FIRST_SEASON_YEAR = 1950;
  const BASE_URL = 'https://ergast.com/api/f1';

  const currentYear = new Date().getFullYear();

  const getSeasonsLimit = () => currentYear - FIRST_SEASON_YEAR + 1;

  const endpoints = {
    seasons: () => `${BASE_URL}/seasons.json?limit=${getSeasonsLimit()}`,
    driver: driverId => `${BASE_URL}/drivers/${driverId}.json`,
    rounds: seasonId => `${BASE_URL}/${seasonId}.json`,
    round: ([seasonId, roundId]) =>
      `${BASE_URL}/${seasonId}/${roundId}/results.json`,
  };

  return endpoints[type](...params);
};
