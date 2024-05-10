import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      {/* props의 값 타입은 js 값 타입*/}
      {/* {}에 값 입력, (string 만 생략 가능)*/}
      <MyComp
        name={"son"}
        string="gangnam"
        age={3.14}
        address={{ city: "seoul", country: "USA" }}
        foods={["pizza", "coffee"]}
        married={true}
        action={function () {
          console.log("action");
        }}
        someAction={() => console.log("some action")}
      />
    </div>
  );
}

export default App;
