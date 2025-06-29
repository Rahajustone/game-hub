import type { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import useData from "../services/useData"

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