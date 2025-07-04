import ApiClient from "./apiClient"
import type { Platform } from "./platformServices"
import axios from "axios"
import { API_URL } from "../constants"

export interface Game {
    id: number
    slug: string
    name: string
    name_original: string
    description: string
    metacritic: number
    metacritic_platforms: any[]
    released: string
    tba: boolean
    updated: string
    background_image: string
    background_image_additional: string
    website: string
    rating: number
    rating_top: number
    ratings: any
    reactions: any
    added: number
    added_by_status: any
    playtime: number
    screenshots_count: number
    movies_count: number
    creators_count: number
    achievements_count: number
    parent_achievements_count: string
    reddit_url: string
    reddit_name: string
    reddit_description: string
    reddit_logo: string
    reddit_count: number
    twitch_count: string
    youtube_count: string
    reviews_text_count: string
    ratings_count: number
    suggestions_count: number
    alternative_names: string[]
    metacritic_url: string
    parents_count: number
    additions_count: number
    game_series_count: number
    esrb_rating: {
        id: number
        name: string
        slug: string
    } | null
    platforms: any[]
    parent_platforms: { platform: Platform }[]
    genres: { id: number, name: string }[]
    publishers: { id: number, name: string }[]
    developers: { id: number, name: string }[]
}

export interface GameTrailer {
    id: number
    name: string
    preview: string
    data: {
        "480": string
        max: string
    }
}

const gameService = new ApiClient<Game>("/games")

export const getGameTrailers = async (gameSlug: string): Promise<GameTrailer[]> => {
    try {
        const response = await axios.get(`${API_URL}/games/${gameSlug}/movies`, {
            params: {
                key: import.meta.env.VITE_API_KEY
            }
        });
        
        console.log('Trailers API response:', response.data);
        console.log('Response structure:', {
            count: response.data.count,
            results: response.data.results?.length || 0,
            hasResults: !!response.data.results
        });
        
        return response.data.results || [];
    } catch (error) {
        console.log('No trailers available for this game');
        return [];
    }
};

export default gameService