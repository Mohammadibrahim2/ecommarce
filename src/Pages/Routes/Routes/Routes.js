import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Header from "../../Home/Home/Header";

export const router=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

            {
                path:"/",
                element:<Header></Header>
            }
        ]
    }
])