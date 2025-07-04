import { Input, InputGroup } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import useGameQueryStore from "../../store/gameQueryStore"

function SearchInput() {
    const [value, setValue] = useState("")
    const setSearchText = useGameQueryStore(s => s.setSearchText)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchText(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup startElement={<LuSearch />}>
                <Input
                    borderRadius={20}
                    borderColor="border"
                    borderWidth={1}
                    borderStyle="solid"
                    variant="outline"
                    placeholder="Search games..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </InputGroup>
        </form>
    )
}

export default SearchInput