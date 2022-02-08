/**
 * A file with reusable helper functions, that can be used across the application
 */

// dependencies
import dayjs from 'dayjs';

import { FIRST_SEASON_YEAR } from './constants';

/**
 * A helper function to get the limit of seasons for the request
 * @returns number
 */
export const getSeasonsLimit = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - FIRST_SEASON_YEAR + 1;
};

/**
 * A utility function to get a date in formatted human-readable
 * string representation
 * @param date:string     A date in string representation
 * @param format:string   A string format compatible with dayjs library
 *                        (@see https://day.js.org/)
 * @returns string
 */
export const getFormattedDate = (date, format) => dayjs(date).format(format);
