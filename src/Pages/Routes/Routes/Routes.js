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
import AccountLayout from "../../../AccountLayout/AccountLayout";



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
            }
        ]


    },

    {
        path:"/account",
        element:<AccountLayout></AccountLayout>,
       children:[
            {
                path:"/account",
                element:<AccountFrom></AccountFrom>

            },
            {
                path:"/account/my-orders",
                element:<MyOrders></MyOrders>

            },
            {
                path:"/account/address",
                element:<Address></Address>

            },
            {
                path:"/account/change-password",
                element:<ChangePassword></ChangePassword>

            },

        ]
    }
])