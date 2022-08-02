import { validateEmail } from "utilities/validations";

export function validateForm(values) {

  const errors = {};

  if (values.firstName === '') {
    errors.firstName = 'Required';
  }

  if (values.lastName === '') {
    errors.lastName = 'Required';
  }

  if (values.email === '') {
    errors.email = 'Required';
  } else if (validateEmail(values.email) === true) {
    errors.email = 'Invalid email';
  }

  if (values.password === '') {
    errors.password = 'Required';
  }

  return errors;

}