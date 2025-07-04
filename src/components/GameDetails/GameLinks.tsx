import { Box, VStack, Heading } from "@chakra-ui/react";
import type { Game } from "../../services/gameServices";

interface Props {
    game: Game;
}

function GameLinks({ game }: Props) {
    return (
        <Box bg="chakra-subtle-bg" borderRadius="lg" overflow="hidden" shadow="md">
            <Box p={6} borderBottom="1px" borderColor="chakra-border-color">
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
    );
}

export default GameLinks; 