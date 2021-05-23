import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import PokemonCard from "components/PokemonCard";
import useTeamPokemon from "hooks/useTeamPokemon";

const Team = (): JSX.Element => {
  const { teamPokemon } = useTeamPokemon();
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      backgroundColor="gray.100"
      pb="12"
    >
      {teamPokemon.length > 0 ? (
        <Grid
          maxW="container.xl"
          mx="auto"
          my="12"
          templateColumns="repeat(6,1fr)"
          width="100%"
          px={30}
          gap={8}
        >
          {teamPokemon.map((pokemon) => (
            <GridItem key={pokemon.name} colSpan={[6, 6, 3, 2]}>
              <PokemonCard data={pokemon} onTeamPage />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Flex justifyContent="center" alignItems="center" width="full" my="40">
          <Text fontSize="lg">NO POKEMON ON YOUR TEAM</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Team;
