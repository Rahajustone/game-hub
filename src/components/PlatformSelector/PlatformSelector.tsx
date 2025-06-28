import { Button, Menu, Portal, Spinner } from "@chakra-ui/react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useState } from "react"
import usePlatforms, { type Platform } from "../../hooks/usePlatform"

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const { data, error, isLoading } = usePlatforms()

    if (error) return null
    if (isLoading) return <Spinner />
    if (!data || !Array.isArray(data)) return null

    return (
        <Menu.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                    {selectedPlatform?.name || "Platform"}
                    {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((platform) => (
                            <Menu.Item 
                                key={platform.id} 
                                value={platform.name}
                                onClick={() => onSelectPlatform(platform)}
                            >
                                {platform.name}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector