import { useQuery } from "@tanstack/react-query"
import genreService from "../services/genreServices"

function useGenres() {
    return useQuery({
        queryKey: ["genres"],
        queryFn: () => genreService.getAll().then((res) => res.data.results),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })
}

export default useGenres    
