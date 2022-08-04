export function parseItemLocationPath(path) {

  let location = '/home';

  if (path === '') {
    return location;
  }

  location += `/${path}`;
  return location;

}