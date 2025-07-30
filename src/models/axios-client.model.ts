import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/storage.constants";
import { RefreshTokens } from "@/services/auth.service";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const UNAUTHORIZED_STATUS = 401;

        if (error.response?.status === UNAUTHORIZED_STATUS) {
            localStorage.removeItem(ACCESS_TOKEN_KEY);

            try {
                const newTokens = await RefreshTokens();
                if (newTokens) {
                    localStorage.setItem(ACCESS_TOKEN_KEY, newTokens.accessToken);
                    localStorage.setItem(REFRESH_TOKEN_KEY, newTokens.refreshToken);
                    instance.defaults.headers.common["Authorization"] = `Bearer ${newTokens.accessToken}`;
                    return instance(error.config as AxiosRequestConfig);
                }
            } catch (error) {
                localStorage.removeItem(ACCESS_TOKEN_KEY);
                localStorage.removeItem(REFRESH_TOKEN_KEY);
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default instance;