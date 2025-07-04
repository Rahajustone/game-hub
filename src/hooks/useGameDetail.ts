import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import type { Game } from "../services/gameServices";

const apiClient = new ApiClient<Game>("/games");

const useGameDetail = (id : string) => {
    return useQuery({
        queryKey: ["game", id],
        queryFn: () => apiClient.get(id),
    });
}   

export default useGameDetail;