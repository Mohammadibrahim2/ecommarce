// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {RiEdit2Fill} from "react-icons/ri";
// import { MdDeleteSweep} from "react-icons/md";
// import { toast } from "react-hot-toast";

// const AllOrders=()=>{
// const [orders,setOrders]=useState([])


// useEffect(()=>{
//     getOrders()
// },[])
//     const getOrders= async()=>{
//         try{
//             const {data}= await axios.get("http://localhost:8000/order")
//             setOrders(data)
//         console.log(data)
//         }
//         catch(error){
//             console.log(error)
//         }

//     }

//     //delete Odrers:
//     const handleDeleteOrder=async(id)=>{
//         console.log(id)
//         const {deleteddata}= await axios.delete(`http://localhost:5000/order/:${id}`)
//       if(deleteddata){
//         toast.success("SuccessFully delete the odrer")
//       }

//     }
//     return(
//         <div className="">
//             {
//                 orders? <> <div className="px-10 py-5  text-black">  <h1>{orders.countOrders}</h1></div>
        
//                 <table className="table border text-black">
              
//                   {/* head */}
//                   <thead className="border border-1 text-black">
//                     <tr className=" text-xl  ">
                   
                  
//                       <th>Image</th>
//                       <th>Product Name</th>
//                       <th>Buyer</th>
//                       <th>Status</th>
//                       <th>Total Price</th>
//                       <th>Update</th>
//                       <th>Delete</th>
                      
                      
//                     </tr>
//                   </thead>
//                   <tbody className="text-black font-semibold">
//                     {/* row */}
                 
//                       {
//                          orders.orderList?.map(o=> <tr key={o._id}>
                              
//                               <td> 
//                                 <div className="flex items-center space-x-3">
//                                   <div className="avatar">
//                                     <div className="mask mask-squircle w-12 h-12">
//                                       <img src="https://5.imimg.com/data5/AV/DY/MY-48806410/magento-e-commerce-500x500.png" 
//                                       alt="Products Image" />
//                                     </div>
//                                   </div>
                                 
//                                 </div>
//                               </td>
//                               <td>
                              
//                                <h1>  </h1>
                             
                           
                             
//                               </td>
//                               <td >
//                                  <span className="capitalize "> {o?.user?.name} </span>
//                               </td>
//                               <td>{o?.status}</td>
//                               <td>
//                                   {o?.totalPrice} kr
//                               </td>
//                               <td>
//                                <Link to={`update/`}> 
//                                <button className=" text-xl font-semibold"
//                                 style={{color:"green"}}
//                                 ><RiEdit2Fill/></button></Link>
//                               </td>
//                               <td  > 
//                                 <button className=" text-xl font-semibold " onClick={()=>handleDeleteOrder(o?._id)}
//                                 style={{color:"red"}}
//                                  ><MdDeleteSweep/></button>
//                               </td>
//                             </tr>)
//                       }
                 
                  
//                     {/* row 2 */}
                    
//                   </tbody>
//                   {/* foot */}
//                   {/* <tfoot>
//                     <tr>
//                       <th></th>
//                       <th>Name</th>
//                       <th>Job</th>
//                       <th>Favorite Color</th>
                    
//                     </tr>
//                   </tfoot> */}
                  
//                 </table></>:
//                 <h1>loadings...</h1>
//             }
           
// </div>
//     )
// }
// export default AllOrders