import { Grid, GridItem, HStack } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/SideBar/GenreList'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { useState, useCallback } from 'react'
import { type Platform } from './hooks/usePlatform'
import { type Genre } from './hooks/useGenres'
import SortSelector from './components/SortSelector/SortSelector'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const handleGenreSelect = useCallback((genre: Genre) => {
    setGameQuery(prev => ({ ...prev, genre }))
  }, [])

  const handlePlatformSelect = useCallback((platform: Platform) => {
    setGameQuery(prev => ({ ...prev, platform }))
  }, [])

  const handleSortOrderSelect = useCallback((sortOrder: string) => {
    setGameQuery(prev => ({ ...prev, sortOrder }))
  }, [])

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
        <GenreList onSelectGenre={handleGenreSelect} selectedGenreId={gameQuery.genre?.id ?? null} />
      </GridItem>
      <GridItem area="main">
        <HStack gap={5} padding={10}>
          <PlatformSelector
            onSelectPlatform={handlePlatformSelect}
            selectedPlatform={gameQuery.platform} />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={handleSortOrderSelect}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
