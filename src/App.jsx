import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  // use... : hook
  // if / for 내에서 절대 사용하지 말 것

  // hook 은 안전하게 컴포넌트 가장 산단에 순서대로 작성할 것

  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const [isOpen, onClose, onOpen] = useDisclosure();

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
