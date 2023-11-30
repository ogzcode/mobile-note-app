import axios from 'axios';

export const request = axios.create({
    baseURL: "https://ogzcode.pythonanywhere.com"
});