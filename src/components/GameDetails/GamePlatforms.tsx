import { Box, VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GamePlatforms({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Platforms</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={4}>
                    {game.parent_platforms && game.parent_platforms.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Available On</Text>
                            <HStack flexWrap="wrap" gap={2}>
                                {game.parent_platforms.map((platform, index) => (
                                    <Badge key={index} colorScheme="green" fontSize="md" p={2}>
                                        {platform.platform.name}
                                    </Badge>
                                ))}
                            </HStack>
                        </Box>
                    )}
                    
                    {game.platforms && game.platforms.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Detailed Platforms</Text>
                            <VStack align="stretch" gap={2}>
                                {game.platforms.map((platform, index) => (
                                    <Box key={index} p={3} border="1px" borderColor="chakra-border-color" borderRadius="md">
                                        <Text fontWeight="semibold">{platform.platform.name}</Text>
                                        {platform.requirements && (
                                            <Text fontSize="sm" color="chakra-subtle-text" mt={1}>
                                                {platform.requirements.minimum || platform.requirements.recommended}
                                            </Text>
                                        )}
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GamePlatforms; 