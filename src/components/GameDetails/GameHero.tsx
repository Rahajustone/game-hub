import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import type { Game } from "../../services/gameServices";
import type { GameTrailer } from "../../services/gameServices";
import { getGameTrailers } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameHero({ game }: Props) {
    const [trailers, setTrailers] = useState<GameTrailer[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                console.log('Fetching trailers for game slug:', game.slug);
                const trailersData = await getGameTrailers(game.slug);
                console.log('Trailers fetched:', trailersData);
                setTrailers(trailersData);
            } catch (error) {
                console.log('No trailers available for this game');
                setTrailers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrailers();
    }, [game.slug]);

    const hasTrailers = trailers.length > 0 && !isLoading;

    return (
        <Box position="relative" w="full" mb={8}>
            {hasTrailers ? (
                // Video Background
                <video
                    style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={trailers[0].data.max}
                />
            ) : (
                // Fallback Image
                <Box
                    w="full"
                    h="500px"
                    style={{
                        backgroundImage: `url(${game.background_image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}
            
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(transparent, rgba(0,0,0,0.9))"
                p={8}
            >
                <Box maxW="1400px" mx="auto">
                    <Heading size="2xl" color="white" mb={3}>{game.name}</Heading>
                    <HStack gap={6} color="white">
                        {game.released && (
                            <HStack>
                                <Text>📅</Text>
                                <Text>{new Date(game.released).toLocaleDateString()}</Text>
                            </HStack>
                        )}
                        {game.rating && (
                            <HStack>
                                <Text>⭐</Text>
                                <Text>{game.rating}/5</Text>
                            </HStack>
                        )}
                        {game.metacritic && (
                            <HStack>
                                <Text>🎯</Text>
                                <Text>Metacritic: {game.metacritic}</Text>
                            </HStack>
                        )}
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
}

export default GameHero; 