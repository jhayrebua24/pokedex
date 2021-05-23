import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { updatePokemonTeam } from "helper";
import useTeamPokemon from "hooks/useTeamPokemon";
import { IPokemonInfo } from "interface";
import { useMemo } from "react";
import InfoPill from "./InfoPill";

interface IPokemonCard {
  data: IPokemonInfo;
  onTeamPage?: boolean;
}

function PokemonCard({ data, onTeamPage }: IPokemonCard): JSX.Element {
  const { teamPokemon, setTeamPokemon } = useTeamPokemon();
  const isPokemonOnTeam = useMemo<boolean>(
    () => teamPokemon.some((pokemon) => pokemon.name === data.name),
    [teamPokemon, data]
  );

  const handleAddToTeam = () => {
    if (teamPokemon.length > 5) return;
    const newPokemonTeam = teamPokemon.concat([data]);
    updatePokemonTeam(newPokemonTeam).then(() =>
      setTeamPokemon(newPokemonTeam)
    );
  };

  const handleDeleteToTeam = () => {
    if (teamPokemon.length < 1) return;
    const newPokemonTeam = teamPokemon.filter(
      (pokemon) => pokemon.name !== data.name
    );
    updatePokemonTeam(newPokemonTeam).then(() =>
      setTeamPokemon(newPokemonTeam)
    );
  };

  const buttonText = useMemo(() => {
    if (isPokemonOnTeam) return "Remove from team";
    if (teamPokemon.length > 5 && !onTeamPage) return "Team is full";
    return "Add to team";
  }, [isPokemonOnTeam, onTeamPage, teamPokemon]);

  return (
    <Box
      minHeight={200}
      backgroundColor="white"
      height="full"
      width="full"
      paddingX="8"
      rounded="lg"
      shadow="md"
      py="8"
      position="relative"
    >
      <Button
        position="absolute"
        top={-5}
        right={0}
        backgroundColor={isPokemonOnTeam ? "red.500" : "green.500"}
        textColor="white"
        onClick={isPokemonOnTeam ? handleDeleteToTeam : handleAddToTeam}
        disabled={teamPokemon.length > 5 && !onTeamPage && !isPokemonOnTeam}
      >
        {buttonText}
      </Button>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="blue.500"
        textTransform="uppercase"
      >
        {data.name}
      </Text>
      <Flex
        mx="auto"
        width="max"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex direction="column">
          <Img src={data.image.front} height={120} />
          <Text
            fontSize="xs"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
          >
            Front
          </Text>
        </Flex>
        <Flex direction="column">
          <Img src={data.image.back} height={120} />
          <Text
            fontSize="xs"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
          >
            Back
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" px="8" mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Types
        </Text>
        <Flex flexWrap="wrap">
          {data.types.map((type, index) => (
            <InfoPill key={type} text={type} isFirst={index < 1} />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" px="8" mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Details
        </Text>
        <Flex mt="2" color="gray.500">
          <Text width="40" fontWeight="semibold">
            Height:
          </Text>
          <Text>{`${data.height} ft`}</Text>
        </Flex>
        <Flex color="gray.500">
          <Text width="40" fontWeight="semibold">
            Weight:
          </Text>
          <Text>{`${data.weight} lbs`}</Text>
        </Flex>
        <Flex color="gray.500">
          <Text width="40" fontWeight="semibold">
            Base Experience:
          </Text>
          <Text>{data.baseExp}</Text>
        </Flex>
      </Flex>

      <Flex direction="column" px="8" mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Abilities
        </Text>
        <Flex flexWrap="wrap">
          {data.abilities.map((ability, index) => (
            <InfoPill key={ability} text={ability} isFirst={index < 1} />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" px="8" mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Stats
        </Text>
        <Flex direction="column">
          {data.stats.map((stat) => (
            <Flex key={stat.name} color="gray.500" fontSize="md">
              <Text width="40" textTransform="capitalize" fontWeight="semibold">
                {stat.name}:
              </Text>
              <Text>{stat.baseStat}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
PokemonCard.defaultProps = {
  onTeamPage: false,
};
export default PokemonCard;
