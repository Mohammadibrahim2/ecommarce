import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";

import Cart from "../../Home/Home/Cart/Cart";
import Home from "../../Home/Home/Home";

import Offers from "../../Home/Home/Offers/Offers/Offers";
import PreOrder from "../../Home/Home/PreOrder/PreOrder";
import AccountFrom from "../../Home/Home/Account/AccountFrom/AccountFrom";
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
import UsersOrders from "../../Home/Home/Account/UsersOders/UsersOrders";
import CreateCategory from "../../Home/Home/CreateCategory/CreateCategory";
import Contact from "../../Home/Home/Contact/ContactUs";
// import AllOrders from "../../Home/Home/Account/Admin/AllOrders/AllOrders";




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
                path:"/contact",
                element:<Contact/>

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
                path:"/dashboard/users-orders/:tranId",
                element:<PrivateRoute><UsersOrders/></PrivateRoute>

            },
            {
                path:"/dashboard/address",
                element:<Address></Address>

            },
            {
                path:"/dashboard/allproducts",
                element:<AllProducts/>

            },
            {
                path:"/dashboard/createproduct",
                element:<PostProduct/>

            },
            // {
            //     path:"/dashboard/allorders",
            //     element:<AllOrders/>

            // },
            {
                path:"/dashboard/allusers",
                element:<AllUsers/>

            },
            {
                path:"/dashboard/create-category",
                element:<CreateCategory/>

            },

        ]
    }
])

{/* <div className="form-control">
<label className="label">
    <span className="label-text  text-black font-semibold " style={{ fontSize: "16px" }}> Product Information</span>
</label>
<input type="text" placeholder="Enter Product Name " {...register("productName", { required: "text is requred" })} className=" py-2 px-3 w-full  bg-violet-50 text-black border " />
</div> */}