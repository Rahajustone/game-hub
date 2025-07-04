import { ClientOnly, HStack, IconButton, Image, Skeleton } from "@chakra-ui/react"
import { LuMoon, LuSun } from "react-icons/lu"
import logo from "../../assets/Logo/logo.webp"
import { useColorMode } from "../../components/ui/color-mode"
import SearchInput from "./SearchInput"


function NavBar() {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack justifyContent="space-between" padding={2}>
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <IconButton onClick={toggleColorMode} variant="outline" size="sm" aria-label="Toggle color mode" borderRadius={20}>
                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                </IconButton>
            </ClientOnly>
        </HStack>
    )
}

export default NavBar