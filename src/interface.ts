/* eslint-disable camelcase */

export interface IPokemonInfo {
  abilities: string[];
  name: string;
  baseExp: number;
  weight: number;
  height: number;
  image: {
    front: string | undefined;
    back: string | undefined;
  };
  stats: {
    name: string;
    baseStat: number;
  }[];
  types: string[];
}

export interface IPokemonData {
  total: number;
  data: IPokemonInfo[];
}

export interface IusePokemon {
  isLoading: boolean;
  pokemons: IPokemonData;
  page: number;
  setPage: (p: number) => void;
}

export interface IPokemonList {
  name: string;
}

export interface IAbilities {
  ability: {
    name: string;
  };
}

export interface IStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface IPokemonDetails {
  abilities: IAbilities[];
  name: string;
  base_experience: number;
  weight: number;
  height: number;
  stats: IStats[];
  sprites: {
    front_default: string | null;
    back_default: string | null;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
