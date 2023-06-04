import axios from 'axios';
import qs from 'qs';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  paramsSerializer: qs.stringify,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  // transformRequest: [qs.stringify],
});

export default api;
