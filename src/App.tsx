import { Grid, GridItem, HStack } from '@chakra-ui/react'
import GameGrid from './components/GameGrid/GameGrid'
import GameHeading from './components/GameHeading/GameHeading'
import NavBar from './components/Navbar/NavBar'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import GenreList from './components/SideBar/GenreList'
import SortSelector from './components/SortSelector/SortSelector'

function App() {

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
      <GridItem area="nav" padding={2}>
        <NavBar/>
      </GridItem>
      <GridItem area="aside" display={{ base: "none", md: "block" }}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameHeading/>
        <HStack gap={5} paddingY={10}>
          <PlatformSelector/>
          <SortSelector/>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
