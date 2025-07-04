import { Box, VStack, Heading, Text, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameESRB({ game }: Props) {
    if (!game.esrb_rating) return null;

    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">ESRB Rating</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={2}>
                    <Badge colorScheme="red" alignSelf="start">
                        {game.esrb_rating.name}
                    </Badge>
                    {game.esrb_rating.slug && (
                                                    <Text fontSize="sm" color="chakra-subtle-text">
                            ID: {game.esrb_rating.slug}
                        </Text>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GameESRB; 