import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";
import moment from "moment/moment";
import { useCart } from "../../../../../Context/CartProvider/Cart";

const UsersOrders = () => {

  const { user, setUser } = useContext(AuthContext)
  const [orders, setOrders] = useState({})
  const [cart, setCart] = useCart()
const navigate=useNavigate()

  useEffect(() => {
    getOrders()
  }, [user?._id])
  const getOrders = async () => {
    try {
      const { data } = await axios.get(`https://updateecommarce-server.vercel.app/order/get-userOrder/${user?._id}`)
      setOrders(data?.orders)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }


  //delete Odrers:
  const handleDeleteOrder=async(id)=>{
      try{
        const {data}= await axios.delete(`https://updateecommarce-server.vercel.app/order/delete-order/${id}`)
        if(data?.success){
          toast.success(data?.message)
         if(data?.success){
          localStorage.removeItem("cart")
          setCart([]);
        navigate("/")
         }
        }
      }
      catch(err){
        console.log(err)
      }
     

  }
  return (
    <div className="">
      <h1 className="text-xl font-semibold"> Your Order Details</h1>
      {
        orders ? <> <div className="px-10 py-5  text-black">  <h1>
          {orders?.products?.length}
        </h1></div>

          <table className="table border text-black">

            {/* head */}
            <thead className="border border-1 text-black">
              <tr className=" text-xl  ">

                <th>#</th>
                <th>Buyer</th>

                
                <th>Date</th>
                <th>Total Price</th>
                <th>Payment Satus</th>

                <th>Delete</th>


              </tr>
            </thead>
            <tbody className="text-black font-semibold">
              <tr>
                <td>{orders?.length}</td>
                <td> {orders?.buyer?.firstName}</td>
                <td> {moment(orders?.createdAt).fromNow()}</td>
               
                <td> {orders?.totalAmount}</td>
                <td> {orders?.paymetStatus? "Success":"Cancel"}</td>
                <td  >
                    <button className=" text-xl font-semibold text-white px-2 rounded-sm "
                      onClick={()=>handleDeleteOrder(orders?._id)}
                      style={{ backgroundColor: "red" }}
                    >Remove</button>
                  </td>
              </tr>


              {/* row */}

              {
                orders?.products?.map(p => <tr>

                  <td>

                  </td>
                
                  <td className="h-10">
                    <div className="mask mask-squircle w-32 h-32 ">
                      <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${p?._id}`}
                        alt="Products Image"  className="w-full h-full "/>
                    </div>
                  </td>
                  <td >
                    <span className="capitalize ">{p?.name} </span>
                  </td>
                  {/* <td>{o?.status}</td>
                              <td>
                                  {o?.totalPrice} kr
                              </td> */}
                  <td>
                    <Link to={`update/`}>
                      <button className=" text-xl font-semibold"
                        style={{ color: "green" }}
                      ><RiEdit2Fill /></button></Link>
                  </td>
                 
                </tr>)
              }


              {/* row 2 */}

            </tbody>


          </table></> :
          <h1>loadings...</h1>
      }

    </div>
  )
}
export default UsersOrders