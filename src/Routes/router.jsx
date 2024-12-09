import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/profile/Profile";
import Login from "../LogIn/Login";
import Register from "../Register/Register";



const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:'/',
             element: <Home/>  
            },
            {
                path:'profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            },

            {
                path:"login",
                element:<Login></Login>
               },
                {
                path:"register",
                element:<Register/>
               },

        ]
       
    }
])

export default router;