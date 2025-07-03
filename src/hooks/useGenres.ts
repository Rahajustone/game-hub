import { useQuery } from "@tanstack/react-query"
import { type Genre } from "../services/genreServices"
import ApiClient from "../services/apiClient"

const apiClient = new ApiClient<Genre>("/genres");

function useGenres() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["genres"],
        queryFn: () => apiClient.getAll({ params: { pageSize: 100 } }),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })

    return { 
        data: data?.results || [], 
        error, 
        isLoading 
    }
}

export default useGenres    
