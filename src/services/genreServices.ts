import ApiClient from "./apiClient"
import type { Genre } from "../hooks/useGenres"

const genreService = new ApiClient<Genre>("/genres", { params: { pageSize: 10 } })

export default genreService