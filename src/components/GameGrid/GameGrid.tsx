import { Text } from "@chakra-ui/react"
import useGames from "../../hooks/useGames"

function GameGrid() {
    const { games, error, isLoading } = useGames()

    return (
        <div>
            {error && <Text>{error}</Text>}
            {isLoading && <Text>Loading...</Text>}
            {games.map((game) => (
                <Text key={game.id}>{game.name}</Text>
            ))}
        </div>
    )
}

export default GameGrid 