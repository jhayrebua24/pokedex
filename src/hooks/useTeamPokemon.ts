import { IPokemonInfo } from "interface";
import { useContext } from "react";
import { TeamContext } from "context/TeamPokemonContext";

export interface ITeamPokemon {
  teamPokemon: IPokemonInfo[];
  setTeamPokemon: (key: any) => void;
}

function useTeamPokemon(): ITeamPokemon {
  const teamPokemon = useContext<ITeamPokemon>(TeamContext);
  return teamPokemon;
}

export default useTeamPokemon;
