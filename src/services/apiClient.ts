import axios from "axios"

// Debug: Log the environment variable
console.log('API Key from env:', import.meta.env.VITE_API_KEY)


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