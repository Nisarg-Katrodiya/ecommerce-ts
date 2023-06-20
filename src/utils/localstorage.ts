export const getDataFromSession = (key: string) => {
  return localStorage.getItem(key);
  // return storageData ? JSON.parse(storageData) : null;
}

export const setDataToSession = (key: string, data: string) => {
  localStorage.setItem(key, data);
}

export const RemoveDataFromSession = (key: string) => {
  return localStorage.removeItem(key);
};