import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log("name", name);
  console.log("age", age);
  console.log("someProp", someProp); // true: 값 없이 작성되면 true
  console.log("otherProp", otherProp); // true
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={30} otherProp="true" />
    </div>
  );
}

export default App;
