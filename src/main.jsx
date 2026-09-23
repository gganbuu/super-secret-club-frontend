import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from './components/Layout/Layout';


import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignUpPost } from './pages/SignUpPage/SignUpPost';

import LoginPage from './pages/LoginPage/LoginPage';
import { LoginPost } from './pages/LoginPage/LoginPost'
import { LogOutPost } from './components/Navbar/LogOutPost'

import CodePage from './pages/CodePage/CodePage';

import './index.css'
import { layoutLoader } from './components/Layout/layoutLoader';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import IndexPage from './pages/IndexPage/IndexPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    loader: layoutLoader,
    children: [
      {
        index: true,
        Component: IndexPage,
      },
      {
        path: 'signup',
        Component: SignUpPage,
        action: SignUpPost,
      },
      {
        path: 'login',
        Component: LoginPage,
        action: LoginPost,
      },
      {
        path: 'logout',
        action: LogOutPost
      },
      {
        path: 'messages',
        Component: MessagesPage,
      },
      {
        path: 'code',
        Component: CodePage,
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
