import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from './components/Layout/Layout';

import SuccessPage from './pages/SuccessPage/SuccessPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignUpPost } from './pages/SignUpPage/SignUpPost';

import LoginPage from './pages/LoginPage/LoginPage';
import { LoginPagePost } from './pages/LoginPage/LoginPost'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        Component: SignUpPage,
      },
      {
        path: 'login',
        Component: LoginPage,
      }
    ]
  }
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: SignUpPage,
//     action: SignUpPost
//   },
//   {
//     path: "/success",
//     Component: SuccessPage,
//   },
//   {
//     path: "/login",
//     Component: LoginPage,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
