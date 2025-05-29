import  RootLayout from "../layouts/RootLayout.jsx";
import {
 
  createBrowserRouter,
 
} from "react-router";
import Home from "../Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
     {
      index: true,
      Component:Home
     }
    ],
  },
]);



export default router