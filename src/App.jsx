import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleClick1() {
    const obj1 = { name: "son", age: 20 };
    // const json1 = JSON.stringify(obj1);

    // axios 가 두번째 파라미터 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const data = {
      name: "lee",
      age: 23,
    };

    axios.post("/api/main41/sub2", data);
  }

  function handleClick3() {
    const data = {
      //  name: name,
      //  city: city,
      name,
      city,
    };
    axios.post("/api/main41/sub3", { name, city });
  }

  return (
    <div>
      <button onClick={handleClick1}>request (json 데이터 포함)</button>
      {/* /api/main41/sub2 post */}
      <button onClick={handleClick2}>요청 (json 데이터 포함)</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청(input에 입력한 값)</button>
      </div>
    </div>
  );
}

export default App;
