import { Box, VStack, Heading, Text, SimpleGrid, Image, HStack, Badge } from "@chakra-ui/react";
import { useState } from "react";
import type { GameTrailer } from "../../services/gameServices";

interface Props {
    trailers: GameTrailer[];
}

function GameTrailers({ trailers }: Props) {
    const [selectedTrailer, setSelectedTrailer] = useState<GameTrailer | null>(null);

    if (!trailers || trailers.length === 0) return null;

    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
                <Heading size="md">Game Trailers</Heading>
            </Box>
            <Box p={6}>
                <VStack align="stretch" gap={4}>
                    {/* Selected Trailer Video */}
                    {selectedTrailer && (
                        <Box>
                            <Text fontWeight="bold" mb={2}>Now Playing: {selectedTrailer.name}</Text>
                            <video
                                controls
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: '6px',
                                    backgroundColor: 'black'
                                }}
                                src={selectedTrailer.data.max}
                            />
                        </Box>
                    )}

                    {/* Trailer Grid */}
                    <Box>
                        <Text fontWeight="bold" mb={3}>
                            {selectedTrailer ? "All Trailers" : "Available Trailers"}
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {trailers.map((trailer) => (
                                <Box 
                                    key={trailer.id}
                                    cursor="pointer"
                                    onClick={() => setSelectedTrailer(trailer)}
                                    border="2px"
                                    borderColor={selectedTrailer?.id === trailer.id ? "blue.500" : "chakra-border-color"}
                                    borderRadius="md"
                                    overflow="hidden"
                                    transition="all 0.2s"
                                    _hover={{ 
                                        borderColor: "blue.300",
                                        transform: "scale(1.02)"
                                    }}
                                >
                                    <Image 
                                        src={trailer.preview} 
                                        alt={trailer.name}
                                        w="full"
                                        h="150px"
                                        objectFit="cover"
                                    />
                                    <Box p={3}>
                                        <Text fontWeight="semibold" fontSize="sm" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                                            {trailer.name}
                                        </Text>
                                        <HStack mt={2} justify="space-between">
                                            <Badge colorScheme="blue" size="sm">Trailer</Badge>
                                            <Text fontSize="xs" color="chakra-subtle-text">
                                                {trailer.data.max ? "HD" : "SD"}
                                            </Text>
                                        </HStack>
                                    </Box>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}

export default GameTrailers; 