import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/Auth";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../pages/RootLayout";

const Routes = () => {
  const loggedIn = useSelector((store:StoreState)=>store.admin.email)

  const appRouter = createBrowserRouter([
    {
      path: "/", // Root path with RootLayout
      element: <RootLayout />, // Apply the RootLayout
      children: [
        {
          index: true, // Default route under "/"
          element: loggedIn ? <Dashboard /> : <Auth />,
        },
        {
          path: "account/dashboard", 
          element: loggedIn ? <Dashboard /> : <Auth />,
        },
        {
          path: "account/dashboard", 
          element: loggedIn ? <Dashboard /> : <Auth />,
        },
        {
          path: "account/dashboard", 
          element: loggedIn ? <Dashboard /> : <Auth />,
        },
      ],
    },
  ]);


  return <RouterProvider router={appRouter} />;
};

export default Routes;
