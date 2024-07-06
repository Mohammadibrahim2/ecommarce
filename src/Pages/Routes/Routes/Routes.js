import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";

import Cart from "../../Home/Home/Cart/Cart";
import Home from "../../Home/Home/Home";

import Offers from "../../Home/Home/Offers/Offers/Offers";
import PreOrder from "../../Home/Home/PreOrder/PreOrder";
import AccountFrom from "../../Home/Home/Account/AccountFrom/AccountFrom";
import Address from "../../Home/Home/Account/Address/Address";
import ChangePassword from "../../Home/Home/Account/ChaangePassword/ChangePassword";

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
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ErrorPage from "../../ErrorPage/ErrorPage";
import AllCategories from "../../Home/Home/Account/Admin/AllCategories/AllCategories";
import AllReviews from "../../Home/Home/Account/Admin/AllReviews/AllReviews";
import AllPreOrders from "../../Home/Home/Account/Admin/AllPreOrders/AllPreOrders";

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
                path:"/register",
                element:<Register/>
            },
             {
                path:"/login",
                element:<Login/>

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
            {
                path:"*",
                element:<ErrorPage/>

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
                element:<AdminRoute><AllProducts/></AdminRoute>

            },
            {
                path:"/dashboard/createproduct",
                element:<AdminRoute><PostProduct/></AdminRoute>

            },
            {
                path:"/dashboard/allcategories",
                element:<AdminRoute><AllCategories/></AdminRoute>

            },
            {
                path:"/dashboard/allusers",
                element:<AdminRoute><AllUsers/></AdminRoute>

            },
            {
                path:"/dashboard/allreviews",
                element:<AdminRoute><AllReviews/></AdminRoute>

            },
            {
                path:"/dashboard/create-category",
                element:<AdminRoute><CreateCategory/></AdminRoute>

            },
            {
                path:"/dashboard/allpreorder",
                element:<AdminRoute><AllPreOrders/></AdminRoute>

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