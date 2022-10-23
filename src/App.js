
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Shop from './componants/Shop/Shop'
import Orders from './componants/Orders/Orders';
import Inventory from './componants/Inventory/Inventory';
import About from './componants/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import LogIn from './componants/LogIn/LogIn';
import SignUp from './componants/SignUp/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        }, 
        {
          path: '/inventory', 
          element: <Inventory></Inventory>
        },
        {
          path: '/about', 
          element: <About></About>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }, 
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
