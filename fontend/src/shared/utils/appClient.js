import axios from 'axios';

const baseURL = 'https://dummyjson.com';

const appClient = () => {
  const axiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });
  return axiosInstance;
};

export default appClient;
