import { useQuery } from "@tanstack/react-query";
import { getGameTrailers } from "../services/gameServices";

const useGameTrailers = (gameId: string) => {
    return useQuery({
        queryKey: ['gameTrailers', gameId],
        queryFn: () => getGameTrailers(gameId),
        enabled: !!gameId,
    });
};

export default useGameTrailers; 