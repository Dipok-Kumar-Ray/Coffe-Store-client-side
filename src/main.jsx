import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffe from "./components/AddCoffe.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./constexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import Users2 from "./components/Users2.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Fix: create QueryClient correctly
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "addCoffee",
        Component: AddCoffe,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "signin",
        loader: () => fetch("http://localhost:3000/user"),
        Component: SignIn,
      },
      {
        path: "signup",
        loader: () => fetch("http://localhost:3000/user"),
        Component: SignUp,
      },
      {
        path: "users",
        loader: () => fetch("http://localhost:3000/user"),
        Component: Users,
      },
      {
        path: "users2",
        Component: Users2,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);













// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import MainLayout from "./components/MainLayout.jsx";
// import Home from "./components/Home.jsx";
// import AddCoffe from "./components/AddCoffe.jsx";
// import CoffeeDetails from "./components/CoffeeDetails.jsx";
// import UpdateCoffee from "./components/UpdateCoffee.jsx";
// import SignIn from "./components/SignIn.jsx";
// import SignUp from "./components/SignUp.jsx";
// import AuthProvider from "./constexts/AuthProvider.jsx";
// import Users from "./components/Users.jsx";
// import { 
  
//   QueryClientProvider,
//   useQueryClient,
// } from "@tanstack/react-query";
//   const queryClient = useQueryClient()


// import Users2 from "./components/Users2.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//         loader: () => fetch("http://localhost:3000/coffees"),
//       },
//       {
//         path: "addCoffee",
//         Component: AddCoffe,
//       },
//       {
//         path: "coffee/:id",
//         Component: CoffeeDetails,
//       },
//       {
//         path: "updateCoffee/:id",
//         Component: UpdateCoffee,
//         loader: ({ params }) =>
//           fetch(`http://localhost:3000/coffees/${params.id}`),
//       },
//       {
//         path: "signin",
//         loader: () => fetch("http://localhost:3000/user"),
//         Component: SignIn,
//       },
//       {
//         path: "signup",
//         loader: () => fetch("http://localhost:3000/user"),
//         Component: SignUp,
//       },
//       {
//         path: "users",
//         loader: () => fetch("http://localhost:3000/user"),
//         Component: Users,
//       },
//       {
//         path:'users2',
//         // loader: () => fetch("http://localhost:3000/user"),
//         Component: Users2,
//       },
//     ],
//   },
// ]);
//  // Access the client

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <RouterProvider router={router}></RouterProvider>
//       </AuthProvider>
//     </QueryClientProvider>
//   </StrictMode>
// );
