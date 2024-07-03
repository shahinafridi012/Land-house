import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Offer from './Components/Offer/Offer';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: () => fetch('/Json.json')
      },
      {
        path: '/offer',
        element: <Offer />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='mx-auto container'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
