import { Box, Heading, Text, SimpleGrid, Link } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameRatings({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Ratings & Reviews</Heading>
            </Box>
            <Box p={6}>
                <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                    {game.metacritic && (
                        <Box textAlign="center">
                            <Text fontSize="sm" color="chakra-subtle-text">Metascore</Text>
                            <Text 
                                fontSize="2xl" 
                                fontWeight="bold"
                                color={game.metacritic >= 75 ? "green.500" : game.metacritic >= 50 ? "yellow.500" : "red.500"}
                            >
                                {game.metacritic}
                            </Text>
                        </Box>
                    )}
                    {game.rating && (
                        <Box textAlign="center">
                            <Text fontSize="sm" color="chakra-subtle-text">Rating</Text>
                            <Text fontSize="2xl" fontWeight="bold">{game.rating}/5</Text>
                        </Box>
                    )}
                    {game.rating_top && (
                        <Box textAlign="center">
                            <Text fontSize="sm" color="chakra-subtle-text">Rating Top</Text>
                            <Text fontSize="2xl" fontWeight="bold">{game.rating_top}</Text>
                        </Box>
                    )}
                    {game.ratings_count && (
                        <Box textAlign="center">
                            <Text fontSize="sm" color="chakra-subtle-text">Total Ratings</Text>
                            <Text fontSize="2xl" fontWeight="bold">{game.ratings_count.toLocaleString()}</Text>
                        </Box>
                    )}
                </SimpleGrid>
                
                {game.metacritic_url && (
                    <Box mt={4}>
                        <Link href={game.metacritic_url} target="_blank" rel="noopener noreferrer" color="blue.500">
                            View on Metacritic ↗
                        </Link>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default GameRatings; 