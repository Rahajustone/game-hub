import { useState } from "react"
import { useEffect } from "react"
import apiClient from "../services/apiClient"
import type { AxiosRequestConfig } from "axios"
import { CanceledError } from "axios"
import useData from "../services/useData"

export interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

function useData<T>(endpoint: string, requestConfig: AxiosRequestConfig) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        const { data, error, isLoading } = useData<T>(endpoint, { ...requestConfig, signal: controller.signal })
        setData(data)
        setError(error)
        setIsLoading(isLoading)

        return () => controller.abort()
    }, [])

    return { data, error, isLoading }
}

export default useData