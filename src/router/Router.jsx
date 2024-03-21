import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layout/main/Home";
import CheckOut from "../layout/main/CheckOut";
// import ProductInfo from "../layout/main/ProductInfo";
import Hero from "../layout/main/ProductInfo";
import Policy from "../layout/shear/Policy";
import Admin from "../Admin";
import AdminLogin from "../layout/dashboard/AdminLogin";
import AuthCheck from "../layout/dashboard/provider/AuthCheck";
import DashboardUI from "../layout/dashboard/Dashboard";
import AddProduct from "../layout/dashboard/AddProduct";
import ViewOrder from "../layout/dashboard/ViewOrder";

 const Router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'check-out',
                element: <CheckOut></CheckOut>
            },
            {
                path: 'detail/:id/:productTitle',
                element: <Hero></Hero>
            },
            {
                path: 'privacy-policy',
                element: <Policy></Policy>
            }
        ]
    },

    {
        path: "admin",
        element: <Admin></Admin>,
        children: [
            {
                path : "dashboard",
                element: <AuthCheck ><DashboardUI /></AuthCheck>
            },
            {
                path: 'login',
                element: <AdminLogin></AdminLogin>
            },
            {
                path: 'add-product',
                element: <AuthCheck><AddProduct></AddProduct></AuthCheck>
            },
            {
                path: 'view-order',
                element: <AuthCheck><ViewOrder></ViewOrder></AuthCheck>
            }
        ]
    }
])


export default Router;