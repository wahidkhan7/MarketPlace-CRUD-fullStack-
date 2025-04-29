import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import MainLayout from './Layout/MainLayout';
import ProductDetails from './Pages/ProductDetails';
import UserList from './Pages/UserList';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthProvider } from './Context/AuthContext';
import UpdateProd from './Pages/UpdateProd';
import AddProd from './Pages/AddProd';
import UpdateProdImage from './Pages/UpdateProdImage';
import UserProfile from './Pages/UserProfile';

function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/search", element:<Search/>},
        {path:"/signup", element:<Signup/>},
        {path:"/login", element:<Login/>},
        {path:"/add", element:<AddProd/>},
        {path: "/:id", element: <ProductDetails />},
        {path:"/update/:id", element:<UpdateProd/>},
        {path: "/image/:id", element: <UpdateProdImage/>},
        {path: "/profile", element: <UserProfile/>},

        // {path: "/search/:name", element: <UserList/>},
      ]

    }
  ])
  

  return (
    <>
      <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
      
    </>
  )
}

export default App
