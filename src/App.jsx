import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "123456789",
  };
  return (
    <div>
      {/* obj의 각 프로퍼티를 jsx 내에서 출력하는 코드 작성 */}
      <li>{obj.age}</li>
      <li>{obj.name}</li>
      <li>{obj.email}</li>
      <li>{obj.password}</li>
    </div>
  );
}

export default App;
