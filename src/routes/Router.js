import {
    createBrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

import Users from "../screens/Users";
import CallsUsers from "../screens/CallsUsers";
import Navbar from "../components/Navbar";
import RequestsScreens from "../screens/Requests";
 export const router = createBrowserRouter([
    {
      path: "/nav",
      element:<Navbar/>,
      children: [
        {
          path: "users",
          element: <Users/>,
        },
        {
            path: "callsUsers/:idUser",
            element: <CallsUsers/>
          },
          {
            path: "requests",
            element: <RequestsScreens/>
          }
      ],
    }
  ]);