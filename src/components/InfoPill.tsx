import { Box } from "@chakra-ui/react";

interface IInfoPill {
  text: string;
  isFirst: boolean;
}

function InfoPill({ text, isFirst }: IInfoPill): JSX.Element {
  return (
    <Box
      py="1"
      px="2"
      ml={isFirst ? 0 : 1}
      m="1"
      backgroundColor="red.300"
      rounded="full"
      textColor="white"
      fontSize="sm"
      fontWeight="medium"
    >
      {text}
    </Box>
  );
}

export default InfoPill;
