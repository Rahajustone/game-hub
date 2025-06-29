import { SimpleGrid, Text } from "@chakra-ui/react"
import type { GameQuery } from "../../App"
import useGames from "../../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
    gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
    const { games, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="5px" gap={4}>
                {isLoading && skeletons.map((skeleton) => (
                    <GameCardSkeleton key={skeleton} />
                ))}
                    {!isLoading && games.length === 0 && (
                        <Text fontSize="xl" color="gray.500" textAlign="center">No games found for the selected filter.</Text>
                    )}
                    {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid 