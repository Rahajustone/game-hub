import { Box, VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameGenres({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Genres</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={4}>
                    {game.genres && game.genres.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Game Genres</Text>
                            <HStack flexWrap="wrap" gap={2}>
                                {game.genres.map((genre, index) => (
                                    <Badge key={index} colorScheme="purple" fontSize="md" p={2}>
                                        {genre.name}
                                    </Badge>
                                ))}
                            </HStack>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GameGenres; 