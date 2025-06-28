import type { Platform } from "../../hooks/useGames"

import { HStack, Icon, Text } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, FaGlobe  } from "react-icons/fa"
import { SiApple, SiNintendo } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import type { IconType } from "react-icons/lib"


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
                <>
                    {iconMap[platform.name] && <Icon as={iconMap[platform.name]}  color="gray.500"/>}
                </>
            ))}
        </HStack>
    )
}

export default PlatIconList 