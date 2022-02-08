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
