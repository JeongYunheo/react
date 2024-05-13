import React from "react";
import { Badge, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}>클릭</Button>
        <Button colorScheme={"green"} variant="outline">
          알림
          <Badge variant="solid" colorScheme={"green"}>
            new
          </Badge>
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
