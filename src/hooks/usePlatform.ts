import useData from "./useData"

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () =>  useData<Platform>("/platforms/lists/parents", { params: { pageSize: 100 } });

export default usePlatforms
