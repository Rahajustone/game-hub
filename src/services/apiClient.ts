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
    constructor(endpoint: string,) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
    }

    get = (id: number) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`)
    }

    create = (data: T) => {
        return axiosInstance.post(this.endpoint, data)
    }

    update = (data: T) => {
        return axiosInstance.put(this.endpoint, data)  
    }

    delete = (id: number) => {
        return axiosInstance.delete(`${this.endpoint}/${id}`)
    }
}

export default ApiClient