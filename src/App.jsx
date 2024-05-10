import React from "react";

function App(props) {
  // object ({},[])
  // 나머지 모두(rest property)
  // ...변수명

  const a = {
    name: "john",
    email: "john@email.com",
    password: "password@email.com",
    address: "gangnam",
  };

  const { name, email, ...b } = a;
  console.log("name", name);
  console.log("email", email);
  console.log("b.password", b.password); // "password"
  console.log("b.address", b.address); //"gangnam"

  // 연습:
  const c = {
    city: "seoul",
    country: "USA",
    price: 500,
    category: "food",
  };

  const { price, ...d } = c;
  console.log("price", price); // 500
  console.log("d.city", d.city); // seoul
  console.log("d.country", d.country); // usa
  console.log("d.category", d.category); // food

  return <div></div>;
}

export default App;
