
import axios from "axios";

export const http = axios.create({
    baseURL: "https://online-excel-heroku.herokuapp.com",
});

// http.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token')

//     if(token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
// });