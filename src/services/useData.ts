import { useQuery } from "@tanstack/react-query"
import type { AxiosRequestConfig } from "axios"
import ApiClient from "./apiClient"

const useData = <T>(endpoint: string, requestConfig: AxiosRequestConfig) => {
    return useQuery({
        queryKey: [endpoint],
        queryFn: () => new ApiClient<T>(endpoint).getAll(requestConfig),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })
}

export default useData