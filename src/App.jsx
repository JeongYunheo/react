import React from "react";

function App(props) {
  // object
  const a = {
    name: "john",
  };

  const b = a;
  console.log(a === b);

  console.log(a.name); // john
  console.log(b.name); // john

  b.name = "jane";
  console.log(a === b);

  console.log(a.name); // Jane
  console.log(b.name); // Jane

  return <div></div>;
}

export default App;
