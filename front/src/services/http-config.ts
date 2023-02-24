import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:4004/api'
});

export const firstPage = axios.create({
  baseURL: 'http://localhost:4004'
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});