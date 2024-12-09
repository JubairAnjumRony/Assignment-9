import { createBrowserRouter, useParams } from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/profile/Profile";
import Login from "../LogIn/Login";
import Register from "../Register/Register";
import Services from "../components/Home/Services";
import ServiceDetails from "../components/Home/ServiceDetails";
import Newsletter from "../components/Home/Newsletter";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import LatestBlog from "../Pages/LatestBlog";
import ForgetPass from "../LogIn/ForgetPass";



const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:'/',
             element: <Home/> ,
             children:[
                {
                    path:"/",
                    element:<Services/>,
                    loader: ()=>fetch('/services.json')
                   },

                
             ] 
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
               {
                path:"forgetPass",
                element:<ForgetPass></ForgetPass>
               },
               
               {
                path: "/services/:id",
                element: 
                  <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                  </PrivateRoute>,
                  loader:()=>fetch('/services.json'),
              
                
              },
             {
                path:"newsletter",
                element:<Newsletter></Newsletter>,
             },
             {
                path:"AboutUs",
                element:<WhyChooseUs/>,
             },
             {
                path:"latestBlogs",
                element:<LatestBlog></LatestBlog>,
             }
        ]
       
    }
])

export default router;