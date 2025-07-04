import { Box, VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GamePublisher({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Publisher & Developer</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={4}>
                    {game.publishers && game.publishers.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Publishers</Text>
                            <HStack flexWrap="wrap" gap={2}>
                                {game.publishers.map((publisher, index) => (
                                    <Badge key={index} colorScheme="blue" fontSize="md" p={2}>
                                        {publisher.name}
                                    </Badge>
                                ))}
                            </HStack>
                        </Box>
                    )}
                    
                    {game.developers && game.developers.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Developers</Text>
                            <HStack flexWrap="wrap" gap={2}>
                                {game.developers.map((developer, index) => (
                                    <Badge key={index} colorScheme="orange" fontSize="md" p={2}>
                                        {developer.name}
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

export default GamePublisher; 