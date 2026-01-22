import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token  = '';
        config.baseURL= process.env.NEXT_PUBLIC_API_URL;
        config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
        config.headers.Accept = 'application/json';

        if (token && !config.headers['remove-token']) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        let formattedError;
        if (axios.isAxiosError(error)) {
          if (error.response) {
            formattedError = {
              message: error?.message,
              status: error?.response?.status,
            };
          } else if (error.request) {
            // Request was made but no response was received
            formattedError = {
              message: 'No response received from server',
              status: null,
            };
          } else {
            // Something went wrong in setting up the request
            formattedError = {
              message: error.message,
              status: null,
            };
          }
        } else {
          // Non-Axios error
          formattedError = {
            message: 'An unexpected error occurred',
            status: null,
          };
        }
        return Promise.reject(formattedError);
    }
);

export default axiosInstance;
