import { ClientOnly, HStack, IconButton, Image, Skeleton, Text } from "@chakra-ui/react"
import { useColorMode } from "../../components/ui/color-mode"
import logo from "../../assets/Logo/logo.webp"
import { LuMoon, LuSun } from "react-icons/lu"

function NavBar() {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <Text>Navbar</Text>
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                </IconButton>
            </ClientOnly>
        </HStack>
    )
}

export default NavBar