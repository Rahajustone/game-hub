import { ClientOnly, HStack, IconButton, Image, Skeleton, Box } from "@chakra-ui/react"
import { LuMoon, LuSun } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo/logo.webp"
import { useColorMode } from "../../components/ui/color-mode"
import SearchInput from "./SearchInput"


function NavBar() {
    const { toggleColorMode, colorMode } = useColorMode()
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
    }

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg="chakra-subtle-bg"
            borderBottom="1px"
            borderColor="chakra-border-color"
            backdropFilter="blur(10px)"
        >
            <HStack justifyContent="space-between" padding={4} maxW="1400px" mx="auto">
                <Image 
                    src={logo} 
                    boxSize="50px" 
                    cursor="pointer"
                    onClick={handleLogoClick}
                    transition="transform 0.2s"
                    _hover={{ transform: "scale(1.05)" }}
                />
                <SearchInput />
                <ClientOnly fallback={<Skeleton boxSize="8" />}>
                    <IconButton onClick={toggleColorMode} variant="outline" size="sm" aria-label="Toggle color mode" borderRadius={20}>
                        {colorMode === "light" ? <LuSun /> : <LuMoon />}
                    </IconButton>
                </ClientOnly>
            </HStack>
        </Box>
    )
}

export default NavBar