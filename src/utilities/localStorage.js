/**
 * A file with reusable functions to work with local storage, that can be used across the application
 */

/**
 * A function to get parsed data from the local storage
 * @param key:string    A key, which should be used to get data
 * @returns {any}
 */
export const getFromStorageData = (key) => {
  if (!localStorage.getItem(key)) return;
  return JSON.parse(localStorage.getItem(key));
};

/**
 * A function to set data to the local storage in string representation
 * @param key:string    A key, which should be used to set data
 * @param value:any     A value that should be stored
 */
export const setToStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
