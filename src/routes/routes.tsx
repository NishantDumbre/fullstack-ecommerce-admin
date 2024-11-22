import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Auth from "../pages/Auth";
import { useSelector } from "react-redux";
import { StoreState } from "../store/appStore";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../pages/RootLayout";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

const Routes = () => {
  const loggedIn = useSelector((store:StoreState)=>store.admin.email)

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true, 
          element: loggedIn ? <Navigate to='/admin/dashboard' /> : <Auth />,
        },
        {
          path: "admin/dashboard", 
          element: loggedIn ? <Dashboard /> : <Auth />,
        },
        {
          path: "admin/products", 
          element: loggedIn ? <Products /> : <Auth />,
        },
        {
          path: "admin/orders", 
          element: loggedIn ? <Orders /> : <Auth />,
        },
      ],
    },
  ]);


  return <RouterProvider router={appRouter} />;
};

export default Routes;
