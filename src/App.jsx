import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box
        bgColor={"yellow"}
        _hover={{
          bgColor: "orange",
        }}
      >
        Lorem ipsum dolor.
      </Box>
    </ChakraProvider>
  );
}

export default App;
