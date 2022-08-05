export function extractAvatarCharactersFromName(name) {

  let avatarString = "";

  if (!name) {
    return avatarString;
  }

  name
    .split(" ")
    .slice(0, 2)
    .forEach((item) => {
      avatarString = avatarString + item[0];
    });

  return avatarString;

}