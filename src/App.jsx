import React from "react";

function App(props) {
  function handleLinkClick(e) {
    // 기본 이벤트 동작을 막기
    e.preventDefault();

    // 개발자가 원하는 동작 ...
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("prevent submit form");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleLinkClick}>
        naver
      </a>
      <form action="https://www.naver.com" onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
