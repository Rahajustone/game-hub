import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/SideBar/GenreList'
import { useState } from 'react'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("")
  return (
    <Grid templateAreas={
      { 
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`
         
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav" padding={2}><NavBar /></GridItem>
      <GridItem area="aside" display={{ base: "none", md: "block" }}>
        <GenreList onSelectGenre={setSelectedGenre} /></GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
