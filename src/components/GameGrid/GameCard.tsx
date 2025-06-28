import { Box, Heading, Image, Text } from "@chakra-ui/react"
import type { Game } from "../../hooks/useGames"
import PlatIconList from "./PlatIconList"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {    
    return (
        <Box borderWidth="1px" borderRadius="10px" overflow="hidden" backgroundColor="gray.800">
            <Image src={game.background_image} />
            <Box p="6">
                <Heading size="md" fontSize="2xl">{game.name}</Heading>
                <Text>
                    <PlatIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                </Text>

            </Box>
            {/* <Box>
                <Text>{game.rating}</Text>
            </Box> */}
        </Box>
    )
}

export default GameCard 