import { useQuery } from "@tanstack/react-query"
import ApiClient from "./apiClient"
import type { AxiosRequestConfig } from "axios"

const useData = <T>(endpoint: string, requestConfig: AxiosRequestConfig) => {
    return useQuery({
        queryKey: [endpoint],
        queryFn: () => new ApiClient<T>(endpoint, requestConfig).getAll(),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })
}

export default useData