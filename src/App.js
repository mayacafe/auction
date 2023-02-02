import React from 'react'
import App from "../src/containers/App";
import '../src/assets/css/main.css'
import Carinnerpages from './components/header/Carinnerpages';
import SignInPage from './components/header/SignInPage';
import SignUpPage from './components/header/SignUpPage';
import About from '../src/pages/About';
import BrowseProduct from '../src/pages/BrowseProduct';
import MyBid from '../src/pages/MyBid';
import Contact from '../src/pages/Contact';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  Navigate
} from "react-router-dom";



const Isloggin = localStorage.getItem('token');
   console.log(Isloggin)

const router = createBrowserRouter([
  // {
  //   path: '/', element: Isloggin ?   <Navigate to="/SignInPage" />:<App />,

  //   children: [
  //     {path: "/", element:<App/> },
      // {path: "About", element:<About/>},
      // {path: "BrowseProduct", element:<BrowseProduct/> },
      // {path: "MyBid", element:<MyBid/>},
      // {path: "Contact", element:<Contact/>},
  //   ] 
  // },

  {path: "/", element:<App/> },
  {path: "Carinnerpages", element:<Carinnerpages/>},
  {path: "SignInPage", element:<SignInPage/>},
  {path: "SignUpPage", element:<SignUpPage/>},
  {path: "About", element:<About/>},
  {path: "BrowseProduct", element:<BrowseProduct/> },
  {path: "MyBid", element:<MyBid/>},
  {path: "Contact", element:<Contact/>},
]);

const MainApp = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default MainApp