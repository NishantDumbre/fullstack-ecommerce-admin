import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Auth from '../pages/Auth'


const appRouter = createBrowserRouter([
    {
        element:<Auth />,
        path:'/'
    },
    {
        element:<Auth />,
        path:'/account/auth'
    }
])




const routes = () => {
  return (
    <></>
  )
}

export default routes