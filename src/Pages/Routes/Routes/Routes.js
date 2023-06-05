import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Account from "../../Home/Home/Account/Account";
import Cart from "../../Home/Home/Cart/Cart";
import Home from "../../Home/Home/Home";

import Offers from "../../Home/Home/Offers/Offers/Offers";

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
                path:"/account",
                element:<Account></Account>
            },
            {
                path:"/offers",
                element:<Offers></Offers>
            }
        ]
    }
])