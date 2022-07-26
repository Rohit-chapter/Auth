import localStorageKeys from "constants/local-storage-keys";

export function getUserStorageData() {

  const data = localStorage.getItem(localStorageKeys.USER_DATA);

  return JSON.parse(data);

}