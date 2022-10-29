import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Catagory from '../../pages/Catagorys/Catagory/Catagory';
import News from "../../pages/News/News/News";
import LogIn from "../../pages/LogIn/LogIn/LogIn";
import Register from "../../pages/LogIn/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsCondition from "../../pages/Others/TermsCondition/TermsCondition";
import Profile from "../../pages/Others/Profile/Profile";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
               path: '/', 
               element: <Home></Home>, 
               loader: () => fetch('https://dragon-news-server-tan-eight.vercel.app/news')
            }, 
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>, 
                loader: ({params}) => fetch(`https://dragon-news-server-tan-eight.vercel.app/catagory/${params.id}`)
            }, 
            {
                path: 'news/:id', 
                element: <PrivateRoute><News></News></PrivateRoute>, 
                loader: ({params}) => fetch(`https://dragon-news-server-tan-eight.vercel.app/news/${params.id}`)
            }, 
            {
                path: '/login', 
                element: <LogIn></LogIn>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsCondition></TermsCondition>
            }, 
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])