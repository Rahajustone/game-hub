import { Spinner, Heading, Image, Text, HStack, List, ListItem, Button } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import getCroppedImageUrl from "../../services/imageUrl"
import type { Genre } from "../../hooks/useGenres"

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenreId: number | null
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
    const { data, error, isLoading } = useGenres()

    
    if (error) return null
    if (isLoading) return <Spinner />
    if (!data || !Array.isArray(data)) return null
    
    return (
        <List.Root padding="5px" width="200px">
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            {data.map((genre) => (
                <ListItem 
                    key={genre.id} 
                    padding={2}
                    borderRadius={5}
                    // backgroundColor={selectedGenre === genre.name ? "gray.700" : "gray.800"}
                    _hover={{ backgroundColor: "gray.700" }}
                    onClick={() => onSelectGenre(genre)} 
                    cursor="pointer"
                >
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
                        <Button 
                            onClick={() => onSelectGenre(genre)} 
                            colorPalette="gray"
                            variant="ghost"
                            _hover={{ backgroundColor: "gray.700" }}
                            _active={{ backgroundColor: "gray.700" }}
                            _focus={{ backgroundColor: "gray.700", outline: "none" }}
                            _focusVisible={{ backgroundColor: "gray.700", outline: "none" }}
                            _focusWithin={{ backgroundColor: "gray.700", outline: "none" }}
                            fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List.Root>
    )
}

export default GenreList    