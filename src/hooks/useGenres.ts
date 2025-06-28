import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

interface Genre {
    id: number
    name: string
    slug: string
}

interface GenreResponse {
    count: number
    results: Genre[]
}

function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<GenreResponse>("/genres", { signal: controller.signal }).then((res) => {
            setGenres(res.data.results)
            setIsLoading(false)
        }).catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [])

    return { genres, error, isLoading }
}

export default useGenres    