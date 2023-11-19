import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../componets/Home/Home/Home";
import Menu from "../Components/Menu/Menu/Menu";
import Order from "../Components/Order/order/Order";
import Login from "../Components/login/Login";
import SignUp from "../Components/SignUP/SignUp";
import Secret from "../componets/Pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../componets/Pages/dashboard/Cart/MyCart";
import AllUsers from "../componets/Pages/dashboard/allusers/AllUsers";
import AdmineRoutes from "./AdmineRoutes";
import AddItems from "../componets/Pages/dashboard/addItems/AddItems";



export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<MyCart></MyCart>
        },
        // admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addItems',
          element:<AdmineRoutes><AddItems></AddItems></AdmineRoutes>
        }
      ]
    }
  ]);
  