
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './common/css/custom.css';
import Projects from './pages/project/Projects';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import Maintenancepage from './pages/components/MaintanancePage';

const router = createBrowserRouter([

{
  path:"/",
  element: <HomePage/>,
  errorElement : <ErrorPage/>
},
{
  path : "project",
  element :<Projects/>
},
{
  path : "maintenance",
  element :<Maintenancepage/>
},
// {
//   path : "*",
//   element :<ErrorPage/>
// }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    
  <RouterProvider router={router}/>
  </Provider>
)
