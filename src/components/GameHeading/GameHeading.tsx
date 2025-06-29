import { Heading } from "@chakra-ui/react"
import { type GameQuery } from "../../App"

interface Props {
    gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
    const heading = (() => {
        if (gameQuery.genre?.name && gameQuery.platform?.name) {
            return `${gameQuery.genre.name} ${gameQuery.platform.name} Games`
        }
        if (gameQuery.platform?.name) {
            return `${gameQuery.platform.name} Games`
        }
        if (gameQuery.genre?.name) {
            return `${gameQuery.genre.name} Games`
        }
        if (gameQuery.searchText) {
            return `${gameQuery.searchText} Games`
        }
        return "Games"
    })()

    return (
        <Heading as="h1" marginY={5} fontSize="5xl" marginBottom={5}>
            {heading}
        </Heading>
    )
}

export default GameHeading