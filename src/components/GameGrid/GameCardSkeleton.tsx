import { Box, HStack, Skeleton } from "@chakra-ui/react"

function GameCardSkeleton() {
    return (
        <Box borderWidth="1px" borderRadius="10px" overflow="hidden" backgroundColor="gray.800">
            <Skeleton height="200px" backgroundColor="gray.600" />
            <Box p="6">
                <Skeleton height="32px" width="80%" marginBottom={2} backgroundColor="gray.600" />
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Skeleton height="20px" width="120px" backgroundColor="gray.600" />
                    <Skeleton height="20px" width="40px" backgroundColor="gray.600" />
                </HStack>
            </Box>
        </Box>
    )
}

export default GameCardSkeleton