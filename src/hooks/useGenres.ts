import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import type { FetchResponse } from "./useData"

export interface Genre {
    id: number
    name: string
    slug: string
    image_background: string
}

function useGenres() {
    return useQuery({
        queryKey: ["genres"],
        queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data.results),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })
}

export default useGenres    
