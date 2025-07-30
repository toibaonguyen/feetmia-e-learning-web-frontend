import axios from "axios";

const instance = axios.create({
    baseURL: process.env.BACKEND_API_URL || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default instance;