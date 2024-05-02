
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './common/css/custom.css';
import Projects from './pages/project/Projects';

const router = createBrowserRouter([

{
  path:"/",
  element: <HomePage/>,
  errorElement : <ErrorPage/>
},
{
  path : "/project",
  element :<Projects/>
}

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
