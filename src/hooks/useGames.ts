import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

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

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        apiClient.get<GameResponse>("/games").then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        })
    }, [])

    return { games, error, isLoading }
}

export default useGames