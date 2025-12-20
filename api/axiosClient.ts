import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5054",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;