import { Box, Button, Flex } from "@chakra-ui/react";

interface IPagination {
  page: number;
  total: number;
  setPage: (page: number) => void;
}

function Pagination({ page, total, setPage }: IPagination): JSX.Element {
  const totalPage = Math.floor(total / 12);

  const handleNext = (): void => {
    if (page >= totalPage) return;
    setPage(page + 1);
  };

  const handlePrev = (): void => {
    if (page < 2) return;
    setPage(page - 1);
  };
  return (
    <Flex
      justifyContent="flex-end"
      maxWidth="container.xl"
      mx="auto"
      px="8"
      width="full"
    >
      <Flex alignItems="center" textColor="white">
        <Button
          backgroundColor="blue.600"
          disabled={page < 2}
          onClick={handlePrev}
        >
          Prev
        </Button>
        <Box
          textColor="blue.600"
          fontWeight="semibold"
          backgroundColor="white"
          h="10"
          px="4"
          display="flex"
          alignItems="center"
        >
          {page} of {totalPage}
        </Box>
        <Button
          onClick={handleNext}
          backgroundColor="blue.600"
          disabled={page >= totalPage}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default Pagination;
