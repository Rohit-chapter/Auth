import localStorageKeys from "constants/local-storage-keys";
import { getStorageToken } from "utilities/storage";

export function calculateRemainingTime(expirationTime) {

  const currentTime = new Date().getTime();

  const remainingDuration = expirationTime - currentTime;

  return remainingDuration;

}

export function retrieveStoredToken() {

  const accessToken = getStorageToken();

  if (accessToken === null) {
    return null;
  }

  const remainingTime = calculateRemainingTime(accessToken.expiresAt);

  if (remainingTime <= 60000) {

    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    return null;

  }

  return {
    token: accessToken.token,
    duration: remainingTime
  };

};