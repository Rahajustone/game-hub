import { Input, InputGroup } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import useGameQueryStore from "../../store/gameQueryStore"
import { useNavigate } from "react-router-dom"

function SearchInput() {
    const [value, setValue] = useState("")
    const setSearchText = useGameQueryStore(s => s.setSearchText)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchText(value)
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup startElement={<LuSearch />} maxW="600px" w="100%">
                <Input
                    borderRadius={20}
                    borderColor="chakra-border-color"
                    borderWidth={1}
                    borderStyle="solid"
                    variant="outline"
                    placeholder="Search games..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    bg="chakra-body-bg"
                />
            </InputGroup>
        </form>
    )
}

export default SearchInput