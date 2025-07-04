import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { 
    Box, 
    Spinner, 
    Text, 
    Image, 
    VStack, 
    HStack, 
    Heading, 
    Badge, 
    Grid, 
    GridItem, 
    SimpleGrid
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";

function GameDetailsPage() {
    const { id } = useParams(); 
    const { data, isLoading, error } = useGameDetail(id || "");

    if (isLoading) return (
        <Box display="flex" justifyContent="center" alignItems="center" minH="50vh">
            <Spinner size="xl" />
        </Box>
    );
    
    if (error) return (
        <Box textAlign="center" p={8}>
            <Text color="red.500">{error.message}</Text>
        </Box>
    );

    const game = data?.data;
    if (!game) return <Text>Game not found</Text>;

    return (
        <Box p={6} maxW="1200px" mx="auto">
            {/* Hero Section */}
            <Box position="relative" mb={8}>
                <Image 
                    src={getCroppedImageUrl(game.background_image)} 
                    alt={game.name}
                    w="full"
                    h="400px"
                    objectFit="cover"
                    borderRadius="lg"
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="linear-gradient(transparent, rgba(0,0,0,0.8))"
                    p={6}
                    borderRadius="0 0 lg lg"
                >
                    <Heading size="2xl" color="white" mb={2}>{game.name}</Heading>
                    <HStack gap={4} color="white">
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
                    </HStack>
                </Box>
            </Box>

            <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
                {/* Main Content */}
                <GridItem>
                    <VStack align="stretch" gap={6}>
                        {/* Basic Info */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
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

                        {/* Ratings & Reviews */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
                                <Heading size="md">Ratings & Reviews</Heading>
                            </Box>
                            <Box p={6}>
                                <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                                    {game.metacritic && (
                                        <Box textAlign="center">
                                            <Text fontSize="sm" color="gray.600">Metacritic</Text>
                                            <Text 
                                                fontSize="2xl" 
                                                fontWeight="bold"
                                                color={game.metacritic >= 75 ? "green.500" : game.metacritic >= 50 ? "yellow.500" : "red.500"}
                                            >
                                                {game.metacritic}
                                            </Text>
                                        </Box>
                                    )}
                                    {game.rating && (
                                        <Box textAlign="center">
                                            <Text fontSize="sm" color="gray.600">Rating</Text>
                                            <Text fontSize="2xl" fontWeight="bold">{game.rating}/5</Text>
                                        </Box>
                                    )}
                                    {game.rating_top && (
                                        <Box textAlign="center">
                                            <Text fontSize="sm" color="gray.600">Rating Top</Text>
                                            <Text fontSize="2xl" fontWeight="bold">{game.rating_top}</Text>
                                        </Box>
                                    )}
                                    {game.ratings_count && (
                                        <Box textAlign="center">
                                            <Text fontSize="sm" color="gray.600">Total Ratings</Text>
                                            <Text fontSize="2xl" fontWeight="bold">{game.ratings_count.toLocaleString()}</Text>
                                        </Box>
                                    )}
                                </SimpleGrid>
                                
                                {game.metacritic_url && (
                                    <Box mt={4}>
                                        <a href={game.metacritic_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--chakra-colors-blue-500)' }}>
                                            View on Metacritic ↗
                                        </a>
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        {/* Social & Community */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
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
                                                <Text fontSize="sm" color="gray.600">{game.reddit_count} members</Text>
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
                    </VStack>
                </GridItem>

                {/* Sidebar */}
                <GridItem>
                    <VStack align="stretch" gap={6}>
                        {/* Quick Stats */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
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

                        {/* ESRB Rating */}
                        {game.esrb_rating && (
                            <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                                <Box p={6} borderBottom="1px" borderColor="gray.200">
                                    <Heading size="md">ESRB Rating</Heading>
                                </Box>
                                <Box p={6}>
                                    <VStack align="stretch" gap={2}>
                                        <Badge colorScheme="red" alignSelf="start">
                                            {game.esrb_rating.name}
                                        </Badge>
                                        {game.esrb_rating.slug && (
                                            <Text fontSize="sm" color="gray.600">
                                                ID: {game.esrb_rating.slug}
                                            </Text>
                                        )}
                                    </VStack>
                                </Box>
                            </Box>
                        )}

                        {/* External Links */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
                                <Heading size="md">External Links</Heading>
                            </Box>
                            <Box p={6}>
                                <VStack align="stretch" gap={3}>
                                    {game.website && (
                                        <a 
                                            href={game.website} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-block',
                                                padding: '8px 16px',
                                                border: '1px solid var(--chakra-colors-blue-500)',
                                                borderRadius: '6px',
                                                color: 'var(--chakra-colors-blue-500)',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Official Website ↗
                                        </a>
                                    )}
                                    
                                    {game.reddit_url && (
                                        <a 
                                            href={game.reddit_url} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-block',
                                                padding: '8px 16px',
                                                border: '1px solid var(--chakra-colors-red-500)',
                                                borderRadius: '6px',
                                                color: 'var(--chakra-colors-red-500)',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Reddit Community ↗
                                        </a>
                                    )}
                                    
                                    {game.metacritic_url && (
                                        <a 
                                            href={game.metacritic_url} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-block',
                                                padding: '8px 16px',
                                                border: '1px solid var(--chakra-colors-green-500)',
                                                borderRadius: '6px',
                                                color: 'var(--chakra-colors-green-500)',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Metacritic ↗
                                        </a>
                                    )}
                                </VStack>
                            </Box>
                        </Box>

                        {/* Additional Info */}
                        <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
                            <Box p={6} borderBottom="1px" borderColor="gray.200">
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
                                            <Text fontSize="sm" color="gray.600">
                                                {new Date(game.updated).toLocaleDateString()}
                                            </Text>
                                        </Box>
                                    )}
                                    
                                    {game.added && (
                                        <Box>
                                            <Text fontWeight="bold" mb={1}>Added to Database</Text>
                                            <Text fontSize="sm" color="gray.600">
                                                {game.added.toLocaleString()} times
                                            </Text>
                                        </Box>
                                    )}
                                </VStack>
                            </Box>
                        </Box>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default GameDetailsPage;
