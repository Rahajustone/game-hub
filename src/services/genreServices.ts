import ApiClient from "./apiClient"

export interface Genre {
    id: number
    name: string
    slug: string
    image_background: string
}

const genreService = new ApiClient<Genre>("/genres")

export default genreService