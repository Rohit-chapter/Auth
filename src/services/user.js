import customAxios from "axios/axios";

export async function getUserProfile() {

  const url = '/getMyProfile';

  const response = await customAxios.get(url);

  return response;

}