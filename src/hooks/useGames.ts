import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"
import type { GameQuery } from "../App"

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
    rating: number
    parent_platforms: { platform: Platform }[]
    metacritic: number
    genre_id: number
    genres: { id: number, name: string }[]
}

export interface GameResponse {
    count: number
    next: string
    previous: string
    results: Game[]
}

const useGames = (gameQuery: GameQuery) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        
        const params: any = {}
        if (gameQuery.genre?.id) params.genres = gameQuery.genre?.id
        if (gameQuery.platform?.id) params.platforms = gameQuery.platform?.id

        apiClient.get<GameResponse>("/games", { 
            params,
            signal: controller.signal 
        }).then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [gameQuery])

    return { games, error, isLoading }
}

export default useGames