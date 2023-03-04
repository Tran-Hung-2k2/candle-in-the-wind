import axios from 'axios';

const baseURL = 'http://localhost:8000';

const appAPI = () => {
  const axiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });
  return axiosInstance;
};

export default appAPI;
