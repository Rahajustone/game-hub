import { useState } from "react"
import { useEffect } from "react"
import apiClient from "../services/apiClient"
import type { AxiosRequestConfig } from "axios"
import { CanceledError } from "axios"

interface FetchResponse<T> {
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
        apiClient.get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal }).then((res) => {
            setData(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [])

    return { data, error, isLoading }
}

export default useData