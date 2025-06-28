import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"
import type { Game } from "../../hooks/useGames"
import PlatIconList from "./PlatIconList"
import CreditScore from "./CreditScore"
import getCroppedImageUrl from "../../services/imageUrl"
import GameCardContainer from "./GameCardContainer"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {    
    return (
        <GameCardContainer>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Box p="6">
                <Heading size="md" fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Box>
                        <PlatIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    </Box>
                    <CreditScore score={game.metacritic} />
                </HStack>
            </Box>
            {/* <Box>
                <Text>{game.rating}</Text>
            </Box> */}
        </GameCardContainer>
    )
}

export default GameCard 