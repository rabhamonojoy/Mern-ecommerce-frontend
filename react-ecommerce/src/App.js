import  Counter  from './features/counter/Counter';
import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import CartPage from './features/pages/CartPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CheckOut from './features/pages/checkout';
import ProductDeatail from './features/Productlist/productDetails';
import ProductDetaiPage from './features/pages/productDetaiPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
       <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckOut></CheckOut>,
  },
  {
    path: "/product-detail",
    element: <ProductDetaiPage></ProductDetaiPage>,
  },
]);

function App() {
  return (
    <div className="App">
     
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
