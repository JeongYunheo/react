function App() {
  const a = 5;
  const b = 9;

  function someMethod() {
    return "hello js";
  }

  function someMethod2(p) {
    return p + " " + p;
  }

  return (
    <>
      <div>
        {/* <p> 5 x 9 = 45 </p> */}
        <p>
          {a} x {b} = {a * b}
        </p>
        <p>{someMethod()}</p> {/* hello js */}
        <p>{someMethod2("react")}</p> {/* react react*/}
      </div>
    </>
  );
}

export default App;
