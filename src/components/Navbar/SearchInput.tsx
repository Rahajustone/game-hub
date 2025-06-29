import { Input, InputGroup  } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

function SearchInput() {
    const [value, setValue] = useState("")

    return (
        <InputGroup startElement={<LuSearch />}>
            <Input
                borderRadius={20}
                variant="outline"
                placeholder="Search games..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </InputGroup>
    )
}

export default SearchInput