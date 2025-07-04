import { Button, Menu, Portal, Spinner } from "@chakra-ui/react"
import { useState } from "react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import usePlatforms from "../../hooks/usePlatform"
import useGameQueryStore from "../../store/gameQueryStore"


function PlatformSelector() {
    const [isOpen, setIsOpen] = useState(false)
    const { data, error, isLoading } = usePlatforms()
    const selectedPlatform = useGameQueryStore(s => s.gameQuery.platform)
    const setPlatform = useGameQueryStore(s => s.setPlatform)

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
                                onClick={() => setPlatform(selectedPlatform?.id === platform.id ? null : platform)}
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