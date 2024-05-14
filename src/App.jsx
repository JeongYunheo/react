import React, { createContext, useContext, useState } from "react";

// step 1: create the context
const MessageContext = createContext("");

function MyBox({ message }) {
  return <div>{message}</div>;
}

function MySection() {
  // step 2: use the context
  const message = useContext(MessageContext);
  return <MyBox message={message} />;
}

function MyContainer() {
  return <MySection />;
}

// context
// # context 과용하지 말 것
// 1. prop 전달부터 시작할 것
// 2. 주로 theme, 현재 계정 정보, routing 등에 사용됨
function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/* step 3: provide the content */}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
