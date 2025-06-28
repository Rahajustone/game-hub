import { Spinner, Box, VStack, Heading } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"

interface Props {
    onSelectGenre: (genre: string) => void
}

function GenreList({ onSelectGenre }: Props) {
    const { data, error, isLoading } = useGenres()
    
    if (error) return null
    if (isLoading) return <Spinner />
    if (!data || !Array.isArray(data)) return null
    
    return (
        <Box padding="10px">
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <VStack gap={2} align="stretch">
                {data.map((genre) => (
                    <Box 
                        key={genre.id} 
                        onClick={() => onSelectGenre(genre.name)} 
                        cursor="pointer"
                        padding={2}
                        borderRadius={5}
                        _hover={{ backgroundColor: "gray.700" }}
                    >
                        {genre.name}
                    </Box>
                ))}
            </VStack>
        </Box>
    )
}

export default GenreList    