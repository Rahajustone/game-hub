import { useQuery } from "@tanstack/react-query"
import { type Platform } from "../services/platformServices"
import ApiClient from "../services/apiClient"
import ms from "ms"

const apiClient = new ApiClient<Platform>("/platforms");

const usePlatforms = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll({ params: { pageSize: 100 } }),
        staleTime: ms("15m"),
    })

    return { 
        data: data?.results || [], 
        error, 
        isLoading 
    }
}

export default usePlatforms
