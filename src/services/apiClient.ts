import type { AxiosRequestConfig } from "axios"
import axios from "axios"
import { API_URL } from "../constants"

// Debug: Log the environment variable
export interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

class ApiClient<T> {
    endpoint: string
    config: AxiosRequestConfig
    constructor(endpoint: string, config: AxiosRequestConfig) {
        this.endpoint = endpoint
        this.config = config
    }

    getAll = () => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, this.config)
    }

    get = (id: number) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`, this.config)
    }

    create = (data: T) => {
        return axiosInstance.post(this.endpoint, data, this.config)
    }

    update = (data: T) => {
        return axiosInstance.put(this.endpoint, data, this.config)  
    }

    delete = (id: number) => {
        return axiosInstance.delete(`${this.endpoint}/${id}`, this.config)
    }
}

export default ApiClient