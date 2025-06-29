import { useState } from "react"
import { useEffect } from "react"
import type { AxiosRequestConfig } from "axios"
import useData from "../services/useData"

export interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

function useDataHooks<T>(endpoint: string, requestConfig: AxiosRequestConfig) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        const { data, error, isLoading } = useData<T>(endpoint, { ...requestConfig, signal: controller.signal })
        if (data) setData(data.data.results)
        if (error) setError(error.message)
        if (isLoading) setIsLoading(isLoading)

        return () => controller.abort()
    }, [])

    return { data, error, isLoading }
}

export default useDataHooks