import { Input, InputGroup } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { LuSearch } from "react-icons/lu"

interface Props {
    onSearch: (searchText: string) => void
}

function SearchInput({ onSearch }: Props) {
    const [value, setValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup startElement={<LuSearch />}>
                <Input
                    borderRadius={20}
                    borderColor="gray.300"
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