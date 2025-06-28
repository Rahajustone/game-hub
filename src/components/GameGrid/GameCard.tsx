import { Box, Heading, Image, Text } from "@chakra-ui/react"
import type { Game } from "../../hooks/useGames"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {    
    return (
        <Box borderWidth="1px" borderRadius="10px" overflow="hidden">
            <Image src={game.background_image} />
            <Box p="6">
                <Heading size="md" fontSize="2xl">{game.name}</Heading>
                <Text>{game.rating}</Text>
            </Box>
        </Box>
    )
}

export default GameCard 