import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        key: 'useyourownkey' // use your own key from rawg.io
    }
})

export default apiClient