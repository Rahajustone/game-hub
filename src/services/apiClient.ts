import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        key: '8a82d30003c24674b59e6029c68f63e9'
    }
})

export default apiClient