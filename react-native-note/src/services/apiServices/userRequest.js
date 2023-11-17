import { request } from "./config";

export const login = (data) => {
    return request.post("/user/login", data);
}

export const register = (data) => {
    return request.post("/user/register", data);
}

export const deleteAccount = () => {
    return request.delete("/user");
}
