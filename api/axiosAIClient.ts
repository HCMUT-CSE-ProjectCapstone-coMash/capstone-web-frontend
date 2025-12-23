import axios from "axios";

const axiosAIClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

export default axiosAIClient;