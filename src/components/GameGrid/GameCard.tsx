import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"
import type { Game } from "../../hooks/useGames"
import PlatIconList from "./PlatIconList"
import CreditScore from "./CreditScore"
import getCroppedImageUrl from "../../services/imageUrl"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {    
    return (
        <Box borderWidth="1px" borderRadius="10px" overflow="hidden" backgroundColor="gray.800">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Box p="6">
                <Heading size="md" fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Text>
                        <PlatIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    </Text>
                    <CreditScore score={game.metacritic} />
                </HStack>
            </Box>
            {/* <Box>
                <Text>{game.rating}</Text>
            </Box> */}
        </Box>
    )
}

export default GameCard 