import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../compment/Login";
import Home from "../compment/Home";
import Sinin from "../compment/Sinin";
import Deteils from "../compment/Deteils";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/Home",
        element: <Home/>,
      },
      {
        path: "/Sinin",
        element: <Sinin/>,
      },
      {
        path: "/Deteilas/:id",
        element: <Deteils/>,
      },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );

  export default Routs