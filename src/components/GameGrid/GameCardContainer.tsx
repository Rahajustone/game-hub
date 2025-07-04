import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { useColorMode } from "../ui/color-mode"

interface Props {
    children: ReactNode
}

function GameCardContainer({ children }: Props) {
    const { colorMode } = useColorMode()
    return (
        <Box 
            borderRadius="10px" 
            overflow="hidden"
            bg="gray.50"
            border={colorMode === "dark" ? "" : "1px solid"}
            borderColor="gray.200"
            _dark={{ bg: "gray.800" }}
            shadow="md"
            _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in-out' }}
        >
            {children}
        </Box>
    )
}

export default GameCardContainer