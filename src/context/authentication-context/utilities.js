import { getStorageToken } from "utilities/storage";

export function calculateRemainingTime(expirationTime) {

  const currentTime = new Date().getTime();

  // subtracting 5000ms from remainingDuration to avoid invalid token error 
  const remainingDuration = (expirationTime - currentTime) - 5000;

  return remainingDuration;

}

export function retrieveStoredToken() {

  const accessToken = getStorageToken();

  if (accessToken === null) {
    return null;
  }

  const remainingTime = calculateRemainingTime(accessToken.expiresAt);

  return {
    token: accessToken.token,
    duration: remainingTime
  };

};