import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/SideBar/GenreList'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { useState } from 'react'
import { type Platform } from './hooks/usePlatform'

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  return (
    <Grid templateAreas={
      {
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
        xl: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" padding={2}><NavBar /></GridItem>
      <GridItem area="aside" display={{ base: "none", md: "block" }}>
        <GenreList onSelectGenre={setSelectedGenreId} selectedGenreId={selectedGenreId} /></GridItem>
      <GridItem area="main">
        <PlatformSelector onSelectPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenreId={selectedGenreId} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
