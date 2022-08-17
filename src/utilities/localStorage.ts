/**
 * A file with reusable functions to work with local storage, that can be used across the application
 */

export const getFromStorageData = (key: string): any | null => {
  if (typeof key === null) return;

  if (!localStorage.getItem(key)) return;

  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const setToStorageData = (key: string, value: any) => {
  if (!key || !value) return;

  const storageItem = JSON.stringify(value);

  localStorage.setItem(key, storageItem);
};
