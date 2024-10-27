import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Hero from "../pages/Hero";
import Dashboard from './../pages/Dashboard';
import ErrorPage from "../components/ErrorPage";

const Routes = createBrowserRouter([{
    path: '/',
    element:<Roots/>,
    errorElement : <ErrorPage/>,
    children:[
        {
            path : '/',
            element: <Hero/>
        },
        {
            path : '/dashboard',
            element: <Dashboard/>,
        }
    ]
}]);

export default Routes;
