import { Heading } from "@chakra-ui/react"
import { type GameQuery } from "../../App"

interface Props {
    gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
    const heading = `${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Games`
    || `${gameQuery.platform?.name || ""} Action Games`
    || `${gameQuery.genre?.name || ""} Games`
    || `${gameQuery.searchText || ""} Games`
    || "Games"

    return (
        <Heading as="h1" marginY={5} fontSize="5xl" marginBottom={5}>
            {heading}
        </Heading>
    )
}

export default GameHeading