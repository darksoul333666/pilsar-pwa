import {
    createBrowserRouter,
    Route,
    Routes
  } from "react-router-dom";


import Navbar from "../Navbar";
import HomeScreen from "../Home";
import AboutScreen from "../About";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar/>,
      children: [
        {
          path: "home",
          element: <HomeScreen/>,
        },
        {
            path: "about",
            element: <AboutScreen/>
          }
      ],
    }
  ]);