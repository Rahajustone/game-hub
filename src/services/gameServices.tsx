import ApiClient from "./apiClient"
import type { Platform } from "./platformServices"

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

const gameService = new ApiClient<Game>("/games")

export default gameService