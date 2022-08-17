/**
 * A file with reusable helper functions, that can be used across the application
 */

// dependencies
import dayjs from 'dayjs';

import { CURRENT_YEAR, FIRST_SEASON_YEAR } from './constants';

/**
 * A utility function to get a date in formatted human-readable
 * string representation
 */
export const getFormattedDate = (date: string, format: string): string =>
  dayjs(date).format(format);

/**
 * A helper function to get the limit of seasons for the request
 */
export const getSeasonsLimit = (): number =>
  CURRENT_YEAR - FIRST_SEASON_YEAR + 1;
