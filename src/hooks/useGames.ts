import type { GameQuery } from "../store/gameQueryStore"
import { type Game } from "../services/gameServices"
import { type FetchResponse } from "../services/apiClient"
import { useInfiniteQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient";


const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    // Debug logging
    console.log("useGames called with gameQuery:", gameQuery)

    const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", {
            genre: gameQuery.genre?.id,
            platform: gameQuery.platform?.id,
            sortOrder: gameQuery.sortOrder,
            searchText: gameQuery.searchText
        }],
        queryFn: ({ pageParam = 1 }) => {
            const params: any = { page: pageParam }
            
            if (gameQuery.genre?.id) params.genres = gameQuery.genre.id
            if (gameQuery.platform?.id) params.platforms = gameQuery.platform.id
            if (gameQuery.sortOrder) params.ordering = gameQuery.sortOrder
            if (gameQuery.searchText) params.search = gameQuery.searchText
            
            console.log("API call with params:", params)
            return apiClient.getAll({ params })  
        },
        getNextPageParam: (lastPage, pages) => lastPage.next ? pages.length + 1 : undefined,
        initialPageParam: 1,
    })

    const games = data?.pages.flatMap(page => page.results) || []
    console.log("Games returned:", games.length)

    return { games, error, isLoading, fetchNextPage, hasNextPage }
}

export default useGames