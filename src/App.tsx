import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar'

function App() {

  return (
    <Grid templateAreas={
      { 
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
         
      }}
    >
      <GridItem area="nav" padding={2}><NavBar /></GridItem>
      <GridItem area="aside" bg="blue" display={{ base: "none", lg: "block" }}>Aside</GridItem>
      <GridItem area="main" bg="green">Main</GridItem>
    </Grid>
  )
}

export default App
