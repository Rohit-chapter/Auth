import customAxios from "axios/axios";

export async function getUserProfile() {

  const url = '/getMyProfile';

  const response = await customAxios.get(url);

  return response;

}

export async function getAllUsers() {

  const url = '/getUsers';

  const response = await customAxios.get(url);

  return response;

}

export async function deleteUser(data) {

  const url = '/deleteUser';

  const response = await customAxios.post(url, data);

  return response;

}