import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameCommunity({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Community & Social</Heading>
            </Box>
            <Box p={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {game.reddit_url && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Reddit</Text>
                            <a href={game.reddit_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chakra-colors-red-500)' }}>
                                {game.reddit_name || "View on Reddit"} ↗
                            </a>
                            {game.reddit_count && (
                                <Text fontSize="sm" color="chakra-subtle-text">{game.reddit_count} members</Text>
                            )}
                        </Box>
                    )}
                    
                    {game.twitch_count && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Twitch</Text>
                            <Text>{game.twitch_count} viewers</Text>
                        </Box>
                    )}
                    
                    {game.youtube_count && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>YouTube</Text>
                            <Text>{game.youtube_count} videos</Text>
                        </Box>
                    )}
                    
                    {game.reviews_text_count && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Reviews</Text>
                            <Text>{game.reviews_text_count} reviews</Text>
                        </Box>
                    )}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default GameCommunity; 