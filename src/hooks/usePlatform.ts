import { useQuery } from "@tanstack/react-query"
import platformService from "../services/platformServices"

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => platformService.getAll().then((res) => res.data.results),
        staleTime: 1000 * 60 * 5, // 15 minutes
    })
}

export default usePlatforms
