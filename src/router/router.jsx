import  RootLayout from "../layouts/RootLayout.jsx";
import {
 
  createBrowserRouter,
 
} from "react-router";
import Home from "../Pages/Home/Home.jsx";
import Register from "../Pages/Register/Register.jsx";
import SignIn from "../Pages/signIn/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
     {
      index: true,
      Component:Home
     },
     {
     path: "Register",
     Component:Register
     },
     {
      path:"SignIn",
      Component:SignIn
     }
    ],
  },
]);



export default router