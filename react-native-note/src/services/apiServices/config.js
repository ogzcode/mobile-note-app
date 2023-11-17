import axios from 'axios';
import { setToken, getToken, removeToken } from '../storageServices';

export const request = axios.create({
    baseURL: "http://localhost:5000"
});

export const setupInterceptors = () => {
    request.interceptors.request.use(
        async (config) => {
            const token = await getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    request.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const { status } = error.response;
            if (status === 401) {
                await removeToken();
            }
            return Promise.reject(error);
        }
    );
}