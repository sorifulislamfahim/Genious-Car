import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Catagory from '../../pages/Catagorys/Catagory/Catagory';
import News from "../../pages/News/News/News";
import LogIn from "../../pages/LogIn/LogIn/LogIn";
import Register from "../../pages/LogIn/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
               path: '/', 
               element: <Home></Home>, 
               loader: () => fetch('http://localhost:5000/news')
            }, 
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>, 
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            }, 
            {
                path: 'news/:id', 
                element: <News></News>, 
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }, 
            {
                path: '/login', 
                element: <LogIn></LogIn>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }
        ]
    }
])