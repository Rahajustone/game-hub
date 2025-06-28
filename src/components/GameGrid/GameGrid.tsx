import useGames from "../../hooks/useGames"
import GameCard from "./GameCard"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
    selectedGenre: string
}

function GameGrid({ selectedGenre }: Props) {
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="5px" gap={3}>
                {isLoading && skeletons.map((skeleton) => (
                    <GameCardSkeleton key={skeleton} />
                ))}
                    {!isLoading && games.filter((game) => selectedGenre ? game.genres.some((genre) => genre.name === selectedGenre) : true).length === 0 && (
                        <Text fontSize="xl" color="gray.500" textAlign="center">No games found for the selected filter.</Text>
                    )}
                    {games.filter((game) => selectedGenre ? game.genres.some((genre) => genre.name === selectedGenre) : true).map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid 