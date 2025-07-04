import { Box, VStack, HStack, Heading, Text, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameStats({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Quick Stats</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={3}>
                    {game.screenshots_count && (
                        <HStack justify="space-between">
                            <Text>Screenshots</Text>
                            <Badge colorScheme="blue">{game.screenshots_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.movies_count && (
                        <HStack justify="space-between">
                            <Text>Videos</Text>
                            <Badge colorScheme="green">{game.movies_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.achievements_count && (
                        <HStack justify="space-between">
                            <Text>Achievements</Text>
                            <Badge colorScheme="purple">{game.achievements_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.creators_count && (
                        <HStack justify="space-between">
                            <Text>Creators</Text>
                            <Badge colorScheme="orange">{game.creators_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.additions_count && (
                        <HStack justify="space-between">
                            <Text>Additions</Text>
                            <Badge colorScheme="teal">{game.additions_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.game_series_count && (
                        <HStack justify="space-between">
                            <Text>Game Series</Text>
                            <Badge colorScheme="pink">{game.game_series_count}</Badge>
                        </HStack>
                    )}
                    
                    {game.suggestions_count && (
                        <HStack justify="space-between">
                            <Text>Suggestions</Text>
                            <Badge colorScheme="cyan">{game.suggestions_count}</Badge>
                        </HStack>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GameStats; 