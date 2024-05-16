import React from "react";

function App(props) {
  // JASON (JavaScript Object Notation)
  // JavaScript 객체(Object) 작성법을 빌린
  // text(문자열) 형식의 데이터

  // Jason 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  // jason의 프로퍼티명은 큰 따옴표로 묶임

  // 직렬화(stringify, encode): 객체 -> JASON (문자열)
  // 역직렬화(parse, decode): JASON(문자열) -> 객체

  // 직렬화 ex)
  const obj1 = { name: "son", age: 33 };
  const jason1 = `{name: "son", "age": 33}`;

  const obj2 = { name: "lee", age: 23 };
  const json2 = JSON.stringify(obj2);
  console.log("obj2", obj2);
  console.log("json2", json2);

  return <div></div>;
}

export default App;
