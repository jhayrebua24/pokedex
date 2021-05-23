import { Flex, Grid, GridItem, Input, Spinner, Text } from "@chakra-ui/react";
import Pagination from "components/Pagination";
import PokemonCard from "components/PokemonCard";
import usePokemon from "hooks/usePokemon";
import { useMemo, useState } from "react";

const Home = (): JSX.Element => {
  const { pokemons, page, setPage, isLoading } = usePokemon();
  const [search, setSearch] = useState<string>("");

  const filtered = useMemo(() => {
    return pokemons.data.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }, [pokemons, search]);

  const content = useMemo(() => {
    if (isLoading)
      return (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      );

    if (filtered.length < 1 && !isLoading)
      return (
        <Flex justifyContent="center" alignItems="center" width="full">
          <Text fontSize="lg">NO POKEMON FOUND</Text>
        </Flex>
      );

    return (
      <>
        <Pagination page={page} total={pokemons.total} setPage={setPage} />
        <Grid
          maxW="container.xl"
          mx="auto"
          my="12"
          templateColumns="repeat(6,1fr)"
          width="100%"
          px={30}
          gap={8}
        >
          {filtered.map((pokemon) => (
            <GridItem key={pokemon.name} colSpan={[6, 6, 3, 2]}>
              <PokemonCard data={pokemon} />
            </GridItem>
          ))}
        </Grid>

        <Pagination page={page} total={pokemons.total} setPage={setPage} />
      </>
    );
  }, [filtered, isLoading, page, pokemons, setPage]);
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      backgroundColor="gray.100"
      pb="12"
    >
      <Flex align="center" my={10} width="full" px="8">
        <Input
          marginX="auto"
          width="full"
          backgroundColor="white"
          maxWidth={600}
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>
      {content}
    </Flex>
  );
};

export default Home;
