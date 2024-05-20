import React from "react";

function App(props) {
  const names = ["son", "lee", "kim", "heo"];
  // <li>"son"</li>
  // <li>"lee"</li>
  // <li>"kim"</li>
  // <li>"heo"</li>
  // 배열을 map 메소드 사용해서 컴포넌트들을 만들 때
  // key prop 을 사용해서 효율성을 높인 것
  // key prop 의 값은 주로 primary key
  return (
    <div>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  );
}

export default App;
