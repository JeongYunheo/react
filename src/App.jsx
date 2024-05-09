function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용

  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Eos, incidunt voluptatem?</p>
    </>
  );
}
function MyComp() {
  // 최상위 컴포넌트는 1개
  return (
    <div>
      <p>lorem asd</p>
      <p>asflka, asdf</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러줄일 때, () 사용
  return (
    <div>
      hello tag!
      <p>lorem asd</p>
      <p>asf, ad</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
