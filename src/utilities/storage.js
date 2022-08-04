import localStorageKeys from "constants/local-storage-keys";

export function getStorageToken() {

  const data = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  return JSON.parse(data);

}