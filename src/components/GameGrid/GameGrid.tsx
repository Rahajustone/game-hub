import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import { Text } from "@chakra-ui/react"

interface Game {
    id: number
    slug: string
    name: string
    image: string
    rating: number
}

interface GameResponse {
    count: number
    next: string
    previous: string
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        apiClient.get<GameResponse>("/games").then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            setError(err.message)
            setIsLoading(false)
        })
    }, [])

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