import { Box, Heading, HStack, Image } from "@chakra-ui/react"
import type { Game } from "../../services/gameServices"
import getCroppedImageUrl from "../../services/imageUrl"
import CreditScore from "./CreditScore"
import Emoji from "./Emoji"
import GameCardContainer from "./GameCardContainer"
import PlatIconList from "./PlatIconList"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {    
    return (
        <GameCardContainer>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Box p="6">
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Box>
                        <PlatIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    </Box>
                    <CreditScore score={game.metacritic} />
                </HStack>
                <Heading size="md" fontSize="2xl">{game.name}
                    <Emoji rating={game.rating_top} />
                </Heading>
                
                
            </Box>
            {/* <Box>
                <Text>{game.rating}</Text>
            </Box> */}
        </GameCardContainer>
    )
}

export default GameCard 