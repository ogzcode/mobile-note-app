import { useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";

import { useToast } from "../components/toast/useToast";

import { setAuth } from "../store/slice/authSlice";

import { request } from "../services/apiServices/config";
import { removeToken, getToken } from "../services/storageServices";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const { showToast } = useToast();
    const dispatch = useDispatch();

    const interceptors = () => {
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
                    dispatch(setAuth(false));
                    showToast("Token expired, please login again!", "error");
                }
                return Promise.reject(error);
            }
        );
    }

    useEffect(() => {
        interceptors();
    }, []);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}