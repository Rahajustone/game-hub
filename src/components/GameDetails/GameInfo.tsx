import { Box, VStack, HStack, Heading, Text, Badge } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameInfo({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Game Information</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={4}>
                    {game.description && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Description</Text>
                            <Text 
                                dangerouslySetInnerHTML={{ __html: game.description }}
                                lineHeight="tall"
                            />
                        </Box>
                    )}
                    
                    {game.name_original && game.name_original !== game.name && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Original Name</Text>
                            <Text>{game.name_original}</Text>
                        </Box>
                    )}

                    {game.alternative_names && game.alternative_names.length > 0 && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Alternative Names</Text>
                            <HStack flexWrap="wrap" gap={2}>
                                {game.alternative_names.map((name, index) => (
                                    <Badge key={index} colorScheme="blue">{name}</Badge>
                                ))}
                            </HStack>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default GameInfo; 