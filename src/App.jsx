import React from "react";

function MyElem(props) {
  console.log(props);

  const { name, age } = props;
  console.log("age", age);
  console.log("name", name);

  return <div></div>;
}

function MyComp({ city, country, price }) {
  // props : {city:"seoul", country:"korea", price:500}
  console.log("city", city);
  console.log("country", country);
  console.log("price", price);
  return <div></div>;
}
function App(props) {
  return (
    <div>
      <MyElem name="son" age={33} />
      <MyComp city="seoul" country="USA" price={500} />
    </div>
  );
}

export default App;
