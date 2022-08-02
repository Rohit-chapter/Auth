import axios from "axios";

const serverURl = process.env.REACT_APP_SERVER_URL;

const customAxios = axios.create({
  baseURL: serverURl
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {

  // eslint-disable-next-line no-console
  console.log(error.response.data, "Server Interaction error");

  return error;

};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
