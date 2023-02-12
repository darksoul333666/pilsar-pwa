import {
    createBrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Navbar from "../Navbar";
import HomeScreen from "../Home";
import AboutScreen from "../About";
import StoreScreen from "../Store";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar/>,
      children: [
        {
          path: "/",
          element: <HomeScreen/>,
        },
        {
          path: "store",
          element: <StoreScreen/>
        },
        {
            path: "about",
            element: <AboutScreen/>
          }
      ],
    }
  ]);