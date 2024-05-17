import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to={"/list"}>List</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  return (
    <div>
      <div>no.1 보기</div>
      <div>no.2 보기</div>
      <div>no.3 보기</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>MAIN PAGE</div>,
      },
      { path: "board", element: <div>BOARD PAGE</div> },
      { path: "list", element: <BoardList /> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
