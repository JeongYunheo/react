import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        abd
      </div>
      <Box p={"10x"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"green"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"green"}>
        Ea hic, ipsum?
      </Box>
      <Box mb={"10px"} bgColor={"green"}>
        Cumque, dolor, facere.
      </Box>
      <Box ml={"10px"} bgColor={"green"}>
        Architecto, autem, dolore.
      </Box>
      <Box mr={"10px"} bgColor={"green"}>
        Nihil, nostrum odio!
      </Box>
      <Box mx={"10px"} bgColor={"green"}>
        Natus, quibusdam reprehenderit.
      </Box>
      <Box my={"10px"} bgColor={"green"}>
        Autem, laudantium, quia.
      </Box>
      <hr />
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Commodi delectus, quia!
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Magnam saepe, voluptatibus.
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Excepturi quidem, sequi!
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Iusto laborum, nobis?
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Dolorem, nesciunt, quos?
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Blanditiis, error, similique?
      </Box>
      <hr />
      <Box w={"500px"} bgColor={"pink"}>
        Lorem.
      </Box>
      <Box h={"500px"} bgColor={"pink"}>
        Deleniti.
      </Box>
    </ChakraProvider>
  );
}

export default App;
