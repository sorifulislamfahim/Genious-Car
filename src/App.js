import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogInBtsp from './componants/LogInBtsp';
import RegisterReactBts from "./componants/RegisterReactBts";
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Main></Main>, 
    children: [
      {
        path: '/',
        element: <RegisterReactBts></RegisterReactBts>
      },
      {
        path: '/register',
        element: <RegisterReactBts></RegisterReactBts>
      },
      {
        path: '/login',
        element: <LogInBtsp></LogInBtsp>,
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
