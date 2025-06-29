import axios from "axios"

// Debug: Log the environment variable


const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

export default apiClient