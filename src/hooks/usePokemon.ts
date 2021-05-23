import { fetchPokemon, fetchPokemons } from "helper";
import { IPokemonData, IusePokemon } from "interface";
import { useEffect, useState } from "react";

const usePokemon = (): IusePokemon => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<IPokemonData>({
    total: 0,
    data: [],
  });

  useEffect(() => {
    setLoading(true);
    fetchPokemons(page)
      .then(async ({ data }) => {
        const { results, count } = data;
        const pokemonList = await fetchPokemon(results);
        setPokemons({
          data: pokemonList,
          total: count,
        });
      })
      .finally(() => setLoading(false));
  }, [page]);
  return {
    page,
    setPage,
    pokemons,
    isLoading,
  };
};
export default usePokemon;
