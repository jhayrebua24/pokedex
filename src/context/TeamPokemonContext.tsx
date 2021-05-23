import { listTeamPokemons } from "helper";
import { ITeamPokemon } from "hooks/useTeamPokemon";
import { createContext, useState, useEffect } from "react";

interface IProvider {
  children: JSX.Element | React.ReactNode;
}

export const TeamContext = createContext<ITeamPokemon>({
  teamPokemon: [],
  setTeamPokemon: () => null,
});

export const TeamProvider = ({ children }: IProvider): JSX.Element => {
  const [teamPokemon, setTeamPokemon] = useState([]);

  useEffect(() => {
    listTeamPokemons()
      .then((res) => setTeamPokemon(res || []))
      .catch(() => setTeamPokemon([]));
  }, []);

  return (
    <TeamContext.Provider
      value={{
        teamPokemon,
        setTeamPokemon,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
