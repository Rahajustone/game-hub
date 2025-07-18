import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import useGameQueryStore from "../../store/gameQueryStore"


function SortSelector() {
    const [isOpen, setIsOpen] = useState(false)
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSortOrder = useGameQueryStore(s => s.setSortOrder)

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ]


    const selectedOrder = sortOrders.find(order => order.value === selectedSortOrder) || sortOrders[0]

    return (
        <Menu.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                    Order by: {selectedOrder.label}
                    {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map((order) => (
                            <Menu.Item
                                key={order.value} 
                                value={order.value}
                                onClick={() => setSortOrder(order.value)}
                            >
                                {order.label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector