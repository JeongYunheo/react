import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"orange"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={2} bgColor={"orange"}>
        Facilis mollitia, tempora?
      </Box>
      <Box m={10} bgColor={"orange"}>
        Incidunt, omnis, unde!
      </Box>
      <Box m={20} bgColor={"orange"}>
        Dolor fuga, maxime.
      </Box>
    </ChakraProvider>
  );
}

export default App;
