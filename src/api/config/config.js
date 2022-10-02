import { API_URL } from '@/utils/config';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: API_URL,
});

axiosClient.interceptors.request.use(
  async (config) => {
    // const access_token = getStorage(STORAGE_KEYS.ACCESS_TOKEN) ? getStorage(STORAGE_KEYS.ACCESS_TOKEN) : '';
    // config.headers = {
    //   ...DEFAULT_OPTS,
    //   ...headers,
    //   Authorization: `Bearer ${access_token}`,
    // };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosClient.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      message: 'success',
    };
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
// Request interceptor for API calls
export default axiosClient;
