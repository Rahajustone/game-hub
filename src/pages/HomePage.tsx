import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid/GameGrid";
import GameHeading from "../components/GameHeading/GameHeading";
import PlatformSelector from "../components/PlatformSelector/PlatformSelector";
import SortSelector from "../components/SortSelector/SortSelector";
import GenreList from "../components/SideBar/GenreList";

function HomePage() {
  return <Grid templateAreas={
    {
      base: `"main"`,
      md: `"aside main"`,
      lg: `"aside main"`,
      xl: `"aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
  >
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
  </Grid>;
}

export default HomePage;