import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import SuccessPage from './pages/SuccessPage/SuccessPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignUpPost } from './pages/SignUpPage/SignUpPost';

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    Component: SignUpPage,
    action: SignUpPost
  },
  {
    path: "/success",
    Component: SuccessPage,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
