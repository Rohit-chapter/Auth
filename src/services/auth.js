import customAxios from "axios/axios";

export async function getLinkedinProfileByCode(code) {

  const url = `/getLinkedinProfile?code=${code}`;

  const response = await customAxios.get(url);

  return response;

}

export async function registerUser(user) {

  const url = '/registration';

  const response = await customAxios.post(url, user);

  return response;

}

export async function loginUser(user) {

  const url = '/login';

  const response = await customAxios.post(url, user);

  return response;

}