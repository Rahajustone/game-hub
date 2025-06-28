import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
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
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<GameResponse>("/games", { signal: controller.signal }).then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [])

    return { games, error, isLoading }
}

export default useGames