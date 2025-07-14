import axios from "axios";

export const TaskAppBackend = axios.create({
    baseURL: `http://localhost:8080`,
});

// TaskAppBackend.interceptors.request.use((config) => {
//     console.log("Run this configuration");
//     console.log(config);
// }, (error) => {
//     return Promise.reject(error);
// });