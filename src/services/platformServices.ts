import ApiClient from "./apiClient"

export interface Platform {
    id: number
    name: string
    slug: string
}

const platformService = new ApiClient<Platform>("/platforms/lists/parents")

export default platformService
