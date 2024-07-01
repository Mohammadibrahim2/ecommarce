import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../../../../Context/CartProvider/Cart";
const SingleCart = ({ product ,removeCartItem,handleIncrement,handleDecrement}) => {
    
    
   
    return (
        <div className="py-3 px-3">
            <div className="flex flex-row justify-between px-3 items-center">
                <div className="item flex flex-row justify-around w-1/2">
                    <div className="img-quantity flex flex-col justify-center items-center" >
                    <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${product?._id}`} 
                    alt="Shoes" className="w-[150px] h-1/2 object-fill" />
                        <div className="text-black font-semibold flex flex-row my-2">
                            <button className="px-2 py border border-1 bg-zinc-100 text-2xl font-bold"
                             onClick={()=>handleDecrement(product?._id)} >-</button>
                            <button className="px-4 py border border-1 bg-zinc-300">{product?.quantity/1000}kg</button>
                            <button className="py px-2 border border-1 bg-zinc-100 text-2xl font-bold"
                            onClick={()=>handleIncrement(product?._id)}>+</button>
                        </div>

                    </div>
                    <div className="info text-sm">
                        <h2 className="text-black">{product?.name}</h2>
                        <div style={{ fontSize: "12px" }}>
                            <h2>Brand:<span className="text-orange-600">{product?.brand}</span></h2>
                            <span className="text-orange-600 ">{product?.category?.name}</span>

                        </div>
                        <h1 className="mt-2">Unit Price: {product?.price}</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">

             
                <span onClick={()=>removeCartItem(product?._id)} className="text-orange-500 py-3" style={{ fontSize: "17px" }}><RiDeleteBin6Line />
                </span>
                <h1 className="text-black">{product?.price}</h1>
                </div>
              
            </div>
            <div>

            </div>
        </div>
    )
}
export default SingleCart