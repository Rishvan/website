
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter,RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './common/css/custom.css';
import Projects from './pages/project/Projects';
import { Provider } from 'react-redux';
import {store} from "./redux/store"

const router = createHashRouter([

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
  <Provider store={store}>
    
  <RouterProvider router={router}/>
  </Provider>
)
