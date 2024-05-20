import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { DeleteIcon, MoonIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <DeleteIcon />
      </div>
      <div>
        <Button leftIcon={<MoonIcon />}> moon </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
