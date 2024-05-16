import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((response) => console.log("200 응답"));
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((response) => console.log("400 응답"))
      .catch(() => console.log("catch  의 메소드, 400 응답"));
  }

  function handleClick404() {
    axios
      .get("/api/main43/sub5")
      .then(() => {})
      .catch((response) => console.log("catch method 404응답"));
  }

  function handleClick500() {
    axios
      .get("/api/main43/sub6")
      .then(() => {})
      .catch((response) => console.log("catch method 500 응답"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 response</button>
      <button onClick={handleClick400}>400 response</button>
      {/* 아래 응답 받은 후, 콘솔에 메세지 출력 */}
      <button onClick={handleClick404}>404 response</button>
      <button onClick={handleClick500}>500 response</button>
    </div>
  );
}

export default App;
