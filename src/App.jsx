import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-evenly"}>
        <Box bgColor={"orange"}>1</Box>
        <Box bgColor={"blue"}>2</Box>
        <Box bgColor={"yellow"}>3</Box>
      </Flex>
      <hr />
      <Flex>
        <Box bgColor={"gray"}>1</Box>
        <Box bgColor={"gold"}>2</Box>
        <Spacer />
        <Box bgColor={"green"}>3</Box>
      </Flex>
      <hr />
      <Center>
        <Box>Lorem.</Box>
      </Center>
      <hr />
      <Center>
        <Box w={{ base: "100%", md: "500px" }} bgColor={"peru"}>
          Lorem.
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
