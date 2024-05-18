import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";

import Cart from "../../Home/Home/Cart/Cart";
import Home from "../../Home/Home/Home";

import Offers from "../../Home/Home/Offers/Offers/Offers";
import PreOrder from "../../Home/Home/PreOrder/PreOrder";
import AccountFrom from "../../Home/Home/Account/AccountFrom/AccountFrom";
import MyOrders from "../../Home/Home/Account/MyOrders/MyOrders";
import Address from "../../Home/Home/Account/Address/Address";
import ChangePassword from "../../Home/Home/Account/ChaangePassword/ChangePassword";


import PostData from "../../../AccountLayout/PostData";
import PostProduct from "../../PostProducts/PostPoducts";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Search from "../../SearchResult/Search";
import FilterAndSearchProduct from "../../FilterAndSearchProduct/FilterSearch";
import DashboardLayout from "../../../AccountLayout/DashBoardLayout";
import AdminRoute from "../AdminRoutes/AdminRoute";
import CategoryProducts from "../../Component/CategoryProduct/CategoryProducts";
import ViewSingleProduct from "../../Home/Home/Product/ViewProductDetails/ViewSingleProduct";
import AllUsers from "../../Home/Home/Account/Admin/Allusers/AllUsers";
import AllProducts from "../../Home/Home/Account/Admin/AllProducts/AllProducts";
import AllOrders from "../../Home/Home/Account/Admin/AllOrders/AllOrders";



export const router=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },
           
            {
                path:"/offers",
                element:<Offers></Offers>
            },
            {
                path:"/preorder",
                element:<PreOrder></PreOrder>
            },
             {
                path:"/login",
                element:<PostData></PostData>

            },
            {
                path:"/search",
                element:<Search></Search>

            },
            {
                path:"/filter",
                element:<FilterAndSearchProduct></FilterAndSearchProduct>

            },
            {
                path:"/category/:slug",
                element:<CategoryProducts></CategoryProducts>

            },
            {
                path:"/product/:id",
                element:<ViewSingleProduct></ViewSingleProduct>

            },

        ]


    },

    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
       children:[
            {
                path:"/dashboard",
                element:<PrivateRoute><AccountFrom></AccountFrom></PrivateRoute>

            },
           
            {
                path:"/dashboard/my-orders",
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>

            },
            {
                path:"/dashboard/address",
                element:<Address></Address>

            },
            {
                path:"/dashboard/allproducts",
                element:<AdminRoute><AllProducts/></AdminRoute>

            },
            {
                path:"/dashboard/postproduct",
                element:<AdminRoute><PostProduct></PostProduct></AdminRoute>

            },
            {
                path:"/dashboard/allorders",
                element:<AdminRoute><AllOrders/></AdminRoute>

            },
            {
                path:"/dashboard/allusers",
                element:<AdminRoute><AllUsers/></AdminRoute>

            },
            {
                path:"/dashboard/change-password",
                element:<ChangePassword></ChangePassword>

            },

        ]
    }
])