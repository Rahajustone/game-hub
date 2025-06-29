import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function GameCardContainer({ children }: Props) {
    return (
        <Box 
            borderRadius="10px" 
            overflow="hidden"
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            _dark={{ bg: "gray.800" }}
        >
            {children}
        </Box>
    )
}

export default GameCardContainer