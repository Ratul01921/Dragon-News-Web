import {
    createBrowserRouter,
  } from "react-router-dom";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Layout</div>,
    },
    {
      path: "/news",
      element: <div>News Layout</div>,
    },
    {
      path: "/auth",
      element: <div>Login Layout</div>,
    },
    {
      path: "*",
      element: <div>Error</div>,
    },
  ]);



export default Routes;