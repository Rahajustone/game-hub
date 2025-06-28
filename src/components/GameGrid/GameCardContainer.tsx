import type { ReactNode } from "react"
import { Box } from "@chakra-ui/react"

interface Props {
    children: ReactNode
}

function GameCardContainer({ children }: Props) {
    return (
        <Box width="300px" borderRadius="10px" overflow="hidden" marginBottom={2} backgroundColor="gray.800">
            {children}
        </Box>
    )
}

export default GameCardContainer