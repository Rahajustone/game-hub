import { ClientOnly, HStack, IconButton, Image, Skeleton, Text } from "@chakra-ui/react"
import { useColorMode } from "../../components/ui/color-mode"
import logo from "../../assets/Logo/logo.webp"
import { LuMoon, LuSun } from "react-icons/lu"
import SearchInput from "./SearchInput"

interface Props {
    onSearch: (searchText: string) => void
}

function NavBar({ onSearch }: Props) {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack justifyContent="space-between" padding={2}>
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <IconButton onClick={toggleColorMode} variant="outline" size="sm" aria-label="Toggle color mode" borderRadius={20}>
                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                </IconButton>
            </ClientOnly>
        </HStack>
    )
}

export default NavBar