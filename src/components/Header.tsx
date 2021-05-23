import { Link } from "react-router-dom";
import { Flex, Img } from "@chakra-ui/react";
import Icon from "assets/img/icons.png";

const Header = (): JSX.Element => {
  return (
    <Flex
      as="header"
      padding="1.6rem"
      bg="blue.600"
      align="center"
      justify="space-between"
      shadow="md"
      wrap="wrap"
    >
      <Link to="/">
        <Img src={Icon} height={12} />
      </Link>
      <Flex
        textColor="white"
        justifyContent="center"
        alignItems="center"
        fontWeight="semibold"
        fontSize="lg"
        as="nav"
      >
        <Link to="/" className="mr-12">
          Pokemons
        </Link>
        <Link to="/team">Team</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
