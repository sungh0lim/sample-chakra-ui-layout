import { Box, Center, Flex, Square } from "@chakra-ui/layout";

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          Box 1
        </Center>
        <Square bg="blue.500" size="150px">
          Box 2
        </Square>
        <Box flex="1" bg="tomato">
          Box 3
        </Box>
      </Flex>
    </div>
  );
}

export default App;
