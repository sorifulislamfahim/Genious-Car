import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import Blog from "../../Pages/Blog/Blog";
import Chekout from "../../Pages/Checkout/Chekout";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/LogIn/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/signup',
                element: <Signup></Signup>
            }, 
            {
                path: '/blog', 
                element: <Blog></Blog>
            },
            {
                path: '/checkout/:id', 
                element: <PrivateRoutes><Chekout></Chekout></PrivateRoutes> , 
                loader: ({params}) => fetch(`https://genious-car-server-eight.vercel.app/services/${params.id}`)
            }, 
            {
                path: '/orders', 
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            }, 
            {
                path: '/services', 
                element: <Services></Services>
            }
        ]
    },
]); 
export default router;