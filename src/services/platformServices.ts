import type { Platform } from "../hooks/usePlatform"
import ApiClient from "./apiClient"

const platformService = new ApiClient<Platform>("/platforms/lists/parents", { params: { pageSize: 100 } })

export default platformService
