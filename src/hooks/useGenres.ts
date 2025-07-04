import { useQuery } from "@tanstack/react-query"
import { type Genre } from "../services/genreServices"
import ApiClient from "../services/apiClient"
import ms from "ms"

const apiClient = new ApiClient<Genre>("/genres");

function useGenres() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["genres"],
        queryFn: () => apiClient.getAll({ params: { pageSize: 100 } }),
        staleTime: ms("15m"),
    })

    return { 
        data: data?.results || [], 
        error, 
        isLoading 
    }
}

export default useGenres    
