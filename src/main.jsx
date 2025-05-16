import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffe from './components/AddCoffe.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';


const router= createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children: [
           {
             index: true,
             Component: Home, 
            loader: () => fetch('http://localhost:3000/coffees')
            },
           {
            path:'addCoffe',
            Component: AddCoffe,
           },
           {
            path: 'coffee/:id',
            Component: CoffeeDetails
           },
           {
            path: 'updateCoffee/:id',
            Component: UpdateCoffee, 
            loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
           }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider> 
 </StrictMode>,
)
