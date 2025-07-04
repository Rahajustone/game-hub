import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import useGameTrailers from "../hooks/useGameTrailers";
import { Box, Spinner, Text, Grid, GridItem, VStack } from "@chakra-ui/react";
import GameHero from "../components/GameDetails/GameHero";
import GameInfo from "../components/GameDetails/GameInfo";
import GameRatings from "../components/GameDetails/GameRatings";
import GamePlatforms from "../components/GameDetails/GamePlatforms";
import GameGenres from "../components/GameDetails/GameGenres";
import GamePublisher from "../components/GameDetails/GamePublisher";
import GameCommunity from "../components/GameDetails/GameCommunity";
import GameTrailers from "../components/GameDetails/GameTrailers";
import GameStats from "../components/GameDetails/GameStats";
import GameESRB from "../components/GameDetails/GameESRB";
import GameLinks from "../components/GameDetails/GameLinks";
import GameAdditional from "../components/GameDetails/GameAdditional";

function GameDetailsPage() {
    const { slug } = useParams(); 
    const { data, isLoading, error } = useGameDetail(slug || "");
    const { data: trailers } = useGameTrailers(slug || "");

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
        <Box>
            {/* Hero Section - Full Width */}
            <GameHero game={game} />

            {/* Main Content - Two Column Layout */}
            <Box px={8} py={6}>
                <Grid 
                    templateColumns={{ base: "1fr", lg: "2fr 1fr" }} 
                    gap={8}
                    maxW="1400px"
                    mx="auto"
                >
                    {/* Left Column - Main Content */}
                    <GridItem>
                        <VStack align="stretch" gap={8}>
                            <GameInfo game={game} />
                            <GameRatings game={game} />
                            <GameTrailers trailers={trailers || []} />
                            <GamePlatforms game={game} />
                            <GameGenres game={game} />
                            <GamePublisher game={game} />
                            <GameCommunity game={game} />
                        </VStack>
                    </GridItem>

                    {/* Right Column - Sidebar */}
                    <GridItem>
                        <VStack align="stretch" gap={6}>
                            <GameStats game={game} />
                            <GameESRB game={game} />
                            <GameLinks game={game} />
                            <GameAdditional game={game} />
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default GameDetailsPage;
