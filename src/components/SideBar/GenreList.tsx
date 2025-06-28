import { Spinner, VStack, Heading, Image, Text, HStack, List, ListItem } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import getCroppedImageUrl from "../../services/imageUrl"

interface Props {
    onSelectGenre: (genre: string) => void
}

function GenreList({ onSelectGenre }: Props) {
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
                    onClick={() => onSelectGenre(genre.name)} 
                    cursor="pointer"
                    padding={2}
                    borderRadius={5}
                    _hover={{ backgroundColor: "gray.700" }}
                >
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List.Root>
    )
}

export default GenreList    