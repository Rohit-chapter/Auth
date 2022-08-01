export function isFormValid(formState) {

  if (formState.firstName === '') {
    return false;
  }

  if (formState.lastName === '') {
    return false;
  }

  if (formState.email === '') {
    return false;
  }

  if (formState.password === '') {
    return false;
  }

  return true;
}