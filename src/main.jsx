import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';


const router= createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children: [
           { index: true, Component: Home },

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider> 
 </StrictMode>,
)
