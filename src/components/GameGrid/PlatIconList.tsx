import type { Platform } from "../../services/platformServices"

import { Box, HStack, Icon } from "@chakra-ui/react"
import { FaAndroid, FaApple, FaGlobe, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import type { IconType } from "react-icons/lib"
import { MdPhoneIphone } from "react-icons/md"
import { SiApple, SiNintendo } from "react-icons/si"


interface Props {
    platforms: Platform[]
}

function PlatIconList({ platforms }: Props) {

    const iconMap: Record<string, IconType> = {
        PC: FaWindows,
        PlayStation: FaPlaystation,
        Xbox: FaXbox,
        Apple: SiApple,
        Linux: FaLinux,
        Android: FaAndroid,
        Nintendo: SiNintendo,
        iOS: MdPhoneIphone,
        mac: FaApple,
        web: FaGlobe,
        
    }

    return (
        <HStack marginY={'10px'} gap={2}>
            {platforms.map((platform) => (
                <Box key={platform.id}>
                    {iconMap[platform.name] && <Icon as={iconMap[platform.name]}  color="gray.500"/>}
                </Box>
            ))}
        </HStack>
    )
}

export default PlatIconList 