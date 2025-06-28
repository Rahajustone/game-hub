import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

function CreditScore({ score }: Props) {
    let colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "red"
    return (
        <Badge
            colorScheme={colorScheme}
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            textAlign="center"
        >
            {score}
        </Badge>
    )
}

export default CreditScore  