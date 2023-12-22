import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayOuts from "../Layouts/MainLayOuts";
import Home from "../Page/Home";
import Features from "../Page/Features";
import Login from "../Page/Login";
import SingUp from "../Page/SingUp";



 export const myRoute = createBrowserRouter([
     {
         path: "/",
         element: <MainLayOuts></MainLayOuts>,
         children: [
             {
                 path: '/',
                 element: <Home></Home>,

             },
             {
                 path: '/login',
                 element: <Login></Login>,

             },
             {
                 path: '/singup',
                 element: <SingUp></SingUp>,

             },
             {
                 path: '/features',
                 element:<Features></Features> ,

             },
             

         ]
     },

    





 ]);
