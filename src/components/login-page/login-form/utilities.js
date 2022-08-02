export function isFormValid(formState) {

  if (formState.email === '') {
    return false;
  }

  if (formState.password === '') {
    return false;
  }

  return true;

}