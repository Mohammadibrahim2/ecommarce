import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";

const UsersOrders = () => {

  const { user, setUser } = useContext(AuthContext)
  const [orders, setOrders] = useState({})



  useEffect(() => {
    getOrders()
  }, [user?._id])
  const getOrders = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/order/get-userOrder/${user?._id}`)
      setOrders(data?.orders)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }


  //delete Odrers:
  // const handleDeleteOrder=async(id)=>{
  //     console.log(id)
  //     const {deleteddata}= await axios.delete(`http://localhost:8000/order/:${id}`)
  //   if(deleteddata){
  //     toast.success("SuccessFully delete the odrer")
  //   }

  // }
  return (
    <div className="">
      <h1>payment okay page Order Details</h1>
      {
        orders ? <> <div className="px-10 py-5  text-black">  <h1>
          {/* //{orders.countOrders} */}
        </h1></div>

          <table className="table border text-black">

            {/* head */}
            <thead className="border border-1 text-black">
              <tr className=" text-xl  ">

                <th>#</th>
                <th>Image</th>

                <th>Buyer</th>
                <th>Status</th>
                <th>Total Price</th>

                <th>Delete</th>


              </tr>
            </thead>
            <tbody className="text-black font-semibold">
              <tr>
                <td> {orders?.buyer?.firstName}</td>
                <td> {orders?.totalAmount}</td>
                <td> {orders?.paymetStatus? "true":"false"}</td>
                <td> {orders?.buyer?.firstName}</td>
              </tr>


              {/* row */}

              {
                orders?.products?.map(o => <tr>

                  <td>

                  </td>
                  <td>

                    <h1> fhaikjhfkjhadfaf</h1>



                  </td>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={`http://localhost:8000/product/product-photo/${o?.products?._id}`}
                        alt="Products Image" />
                    </div>
                  </td>
                  <td >
                    <span className="capitalize ">{o?.name} </span>
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
                  <td  >
                    <button className=" text-xl font-semibold "
                      // onClick={()=>handleDeleteOrder(o?._id)}
                      style={{ color: "red" }}
                    ><MdDeleteSweep /></button>
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