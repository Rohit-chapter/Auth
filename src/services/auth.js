import axios from 'axios';

export async function getLinkedinProfileByCode(code) {

  const url = `http://localhost:8000/getLinkedinProfile?code=${code}`;

  const response = await axios.get(url);

  return response;

}