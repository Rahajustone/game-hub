import { Box, VStack, HStack, Heading, Text, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameAdditional({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Additional Information</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={3}>
                    {game.tba && (
                        <HStack>
                            <Text fontWeight="bold">TBA:</Text>
                            <Badge colorScheme="yellow">To Be Announced</Badge>
                        </HStack>
                    )}
                    
                    {game.updated && (
                        <Box>
                            <Text fontWeight="bold" mb={1}>Last Updated</Text>
                            <Text fontSize="sm" color="chakra-subtle-text">
                                {new Date(game.updated).toLocaleDateString()}
                            </Text>
                        </Box>
                    )}
                    
                    {game.added && (
                        <Box>
                            <Text fontWeight="bold" mb={1}>Added to Database</Text>
                            <Text fontSize="sm" color="chakra-subtle-text">
                                {game.added.toLocaleString()} times
                            </Text>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GameAdditional; 