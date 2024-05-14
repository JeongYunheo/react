import React, { useState } from "react";

function MyBox() {
  const [content, setContent] = useState("");

  function handelChange(e) {
    setContent(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handelChange} />
      <p>{content}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
      {/*
    <div>
    <input />
    <p></p>
    </div>
    두번 나오게
    */}
    </div>
  );
}

export default App;
