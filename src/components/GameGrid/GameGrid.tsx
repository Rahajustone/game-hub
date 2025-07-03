import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import type { GameQuery } from "../../App"
import useGames from "../../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import InfiniteScroll from "react-infinite-scroll-component"

interface Props {
    gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
    const { games, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error.message}</Text>}
            <InfiniteScroll
                dataLength={games?.length || 0}
                next={fetchNextPage}
                hasMore={hasNextPage || false}
                loader={<Spinner/>}
            >
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="5px" gap={4}>
                    {isLoading && skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                    {!isLoading && games && games.length === 0 && (
                        <Text fontSize="xl" color="gray.500" textAlign="center">No games found for the selected filter.</Text>
                    )}
                    {!isLoading && games && games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    )
}

export default GameGrid 