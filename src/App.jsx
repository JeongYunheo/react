import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Grey</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Atque?</Button>
        <Button colorScheme={"yellow"}>Ipsum!</Button>
        <Button colorScheme={"green"}>Quia?</Button>
        <Button colorScheme={"teal"}>Nemo.</Button>
        <Button colorScheme={"blue"}>Accusantium?</Button>
        <Button colorScheme={"cyan"}>Saepe!</Button>
        <Button colorScheme={"purple"}>Sapiente.</Button>
        <Button colorScheme={"red"}>Quibusdam.</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          lorem
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Accusamus.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Accusamus.
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Saepe?
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
