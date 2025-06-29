import { useEffect, useState, useMemo } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"
import type { GameQuery } from "../App"
import gameService from "../services/gameServices"

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
    rating_top: number
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

    const params = useMemo(() => {
        const queryParams: any = {}
        if (gameQuery.genre?.id) queryParams.genres = gameQuery.genre.id
        if (gameQuery.platform?.id) queryParams.platforms = gameQuery.platform.id
        if (gameQuery.sortOrder) queryParams.ordering = gameQuery.sortOrder
        if (gameQuery.searchText) queryParams.search = gameQuery.searchText
        
        return queryParams
    }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder, gameQuery.searchText])

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        
        gameService.getAll().then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [params])

    return { games, error, isLoading }
}

export default useGames