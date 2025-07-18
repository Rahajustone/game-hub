import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import getCroppedImageUrl from "../../services/imageUrl"
import useGameQueryStore from "../../store/gameQueryStore"


function GenreList() {
    const { data, error, isLoading } = useGenres()
    const selectedGenre = useGameQueryStore(s => s.gameQuery.genre)
    const setGenre = useGameQueryStore(s => s.setGenre)

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List.Root padding="5px" width="200px">
            <Heading fontSize="3xl" marginBottom={3} whiteSpace="nowrap">Genres</Heading>
            {data?.map((genre) => (
                <ListItem 
                    key={genre.id} 
                    padding={2}
                    borderRadius={5}
                    _hover={{ backgroundColor: "gray.700" }}
                    onClick={() => setGenre(selectedGenre?.id === genre.id ? null : genre)} 
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
                            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                            onClick={() => setGenre(selectedGenre?.id === genre.id ? null : genre)}
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