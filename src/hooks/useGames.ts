import type { GameQuery } from "../App"
import { type Game } from "../services/gameServices"
import { type FetchResponse } from "../services/apiClient"
import { useInfiniteQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient";


const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {

    const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) => {
            return apiClient.getAll({ params: { page: pageParam, ...gameQuery } })  
        },
        getNextPageParam: (lastPage, pages) => lastPage.next ? pages.length + 1 : undefined,
        initialPageParam: 1,
    })

    const games = data?.pages.flatMap(page => page.results) || []

    return { games, error, isLoading, fetchNextPage, hasNextPage }
}

export default useGames