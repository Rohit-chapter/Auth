export function findKeyByIndex(collection, index) {

  const array = Object.keys(collection);

  const key = array[index];

  return key;

}

export function throttle(callback, limit) {

  let wait = false;

  return function () {

    if (!wait) {

      callback.call();
      wait = true;

      setTimeout(function () {
        wait = false;
      }, limit);

    }
  };
}