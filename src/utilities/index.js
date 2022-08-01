import CryptoJS from "crypto-js";

export function findKeyByIndex(collection, index) {

  const array = Object.keys(collection);

  const key = array[index];

  return key;

}

export function convertValueToHash(value) {

  const hash = CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex);

  return hash;

}