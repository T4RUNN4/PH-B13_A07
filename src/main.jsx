import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

const rounter = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rounter}></RouterProvider>
  </StrictMode>,
)
