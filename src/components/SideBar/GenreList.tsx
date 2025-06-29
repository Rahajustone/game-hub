import { Spinner, Heading, Image, HStack, List, ListItem, Button } from "@chakra-ui/react"
import useGenres, { type Genre } from "../../hooks/useGenres"
import getCroppedImageUrl from "../../services/imageUrl"

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenreId: number | null
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
    const { data, error, isLoading } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List.Root padding="5px" width="200px">
            <Heading fontSize="3xl" marginBottom={3} whiteSpace="nowrap">Genres</Heading>
            {data.map((genre) => (
                <ListItem 
                    key={genre.id} 
                    padding={2}
                    borderRadius={5}
                    _hover={{ backgroundColor: "gray.700" }}
                    onClick={() => onSelectGenre(genre)} 
                    cursor="pointer"
                >
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            objectFit="cover"
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            whiteSpace="normal"
                            textAlign="left"
                            fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                            onClick={() => onSelectGenre(genre)}
                            fontSize="lg"
                            variant="ghost"
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