import ApiClient from "./apiClient"
import type { Game } from "../hooks/useGames"

const gameService = new ApiClient<Game>("/games", { params: { pageSize: 10 } })

export default gameService