import axios from "axios";
import localforage from "localforage";
import { IPokemonDetails, IPokemonInfo, IPokemonList } from "interface";

export const API = process.env.REACT_APP_API;
const formatPokemonData = ({
  name,
  weight,
  height,
  sprites,
  ...data
}: IPokemonDetails): IPokemonInfo => ({
  name,
  weight,
  height,
  baseExp: data.base_experience,
  abilities: data.abilities.map((ability) => ability.ability.name),
  stats: data.stats.map((stat) => ({
    name: stat.stat.name,
    baseStat: stat.base_stat,
  })),
  image: {
    front: sprites.front_default || "",
    back: sprites.back_default || "",
  },
  types: data.types.map((val) => val.type.name),
});

export const fetchPokemons = (page: number): Promise<any> =>
  axios.get(`${API}/pokemon`, {
    params: {
      offset: (page - 1) * 12,
      limit: 12,
    },
  });

export const fetchPokemon = (data: IPokemonList[]): Promise<any> =>
  Promise.all(
    data.map(async ({ name }) => {
      const { data: pokemonData } = await axios.get(`${API}/pokemon/${name}`);
      return formatPokemonData(pokemonData);
    })
  );

export const listTeamPokemons = (): Promise<any> =>
  localforage.getItem("my-team");

export const updatePokemonTeam = (payload: IPokemonInfo[]): Promise<any> =>
  localforage.setItem("my-team", payload);
