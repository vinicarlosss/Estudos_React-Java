import axios from 'axios';

const csrfToken = document.cookie.replace(
  /(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
  '$1'
);

export const axiosInstance = axios.create({
  baseURL: 'https://maragogi.cwi.com.br/api',
  timeout: 5000,
  headers: {
    'X-XSRF-TOKEN': csrfToken,
  },
  withCredentials: true,
});
