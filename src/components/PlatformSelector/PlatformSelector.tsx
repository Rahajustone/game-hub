import { Button, Menu, Portal, Spinner } from "@chakra-ui/react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import { useState } from "react"
import usePlatforms from "../../hooks/usePlatform"

function PlatformSelector() {
    const [isOpen, setIsOpen] = useState(false)
    const { data, error, isLoading } = usePlatforms()

    if (error) return null
    if (isLoading) return <Spinner />
    if (!data || !Array.isArray(data)) return null

    return (
        <Menu.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                    Platform
                    {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((platform) => (
                            <Menu.Item key={platform.id} value={platform.name}>
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