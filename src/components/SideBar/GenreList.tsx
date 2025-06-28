import useGenres from "../../hooks/useGenres"
import { Spinner } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
    onSelectGenre: (genre: string) => void
}

    function GenreList({ onSelectGenre }: Props) {
    const { genres, error, isLoading } = useGenres()
    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <ul>
            {genres.map((genre) => (
                <li key={genre.id} onClick={() => onSelectGenre(genre.name)} style={{ cursor: "pointer" }}>{genre.name}</li>
            ))}
        </ul>
    )
}

export default GenreList    