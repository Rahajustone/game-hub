import { Box, HStack, Skeleton } from "@chakra-ui/react"
import GameCardContainer from "./GameCardContainer"

function GameCardSkeleton() {
    return (
        <GameCardContainer>
            <Skeleton backgroundColor="gray.600" />
            <Box p="6">
                <Skeleton height="32px" width="80%" marginBottom={2} backgroundColor="gray.600" />
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Skeleton height="20px" width="120px" backgroundColor="gray.600" />
                    <Skeleton height="20px" width="40px" backgroundColor="gray.600" />
                </HStack>
            </Box>
        </GameCardContainer>
    )
}

export default GameCardSkeleton