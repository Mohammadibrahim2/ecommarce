import React, { useContext, useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import { useCart } from "../../../../Context/CartProvider/Cart";
import { Badge, Select } from "antd";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import { Checkbox, Radio } from 'antd';
import { Link, Navigate } from "react-router-dom";


const Cart = () => {

    const [cart, setCart] = useCart()
    const { user, setUser } = useContext(AuthContext)
    const [ClientToken, setClienttoken] = useState("")
    const [instance, setInstance] = useState("")
    const [loading, setLoading] = useState(false)
    const [wholePrice, setWholePrice] = useState(0)
    const [option,setOption]=useState()
   
    //total price
    const totalPrice = () => {
        try {

            let total = 0
            cart.map((i) => {
                total = total + ((i.quantity) / 1000 * i.price)
                setWholePrice(total)
            })
            return total

        }


        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        totalPrice()
    }, [])
    const removeCartItem = (proID) => {

        try {
            let myCart = [...cart]
            let index = myCart.findIndex((item) => item._id === proID)
            myCart.splice(index, 1)
            setCart(myCart)
            localStorage.setItem('cart', JSON.stringify(myCart))
          totalPrice(myCart)

        }
        catch (error) {
            console.log(error)
        }


    }
    //getway payment getway token



    const handlePayment = async (cart, user) => {
        try {

            const { data } = await axios.post("https://updateecommarce-server.vercel.app/product/order", {
                cart, user,wholePrice
            })
            console.log(data.url)
            window.location.replace(data?.url)




        }
        catch (err) {
            console.log(err)
            setLoading(false)

        }


    }

    const handleDecrement = async (id) => {
        try {
            setCart(cart =>
                cart.map((item) =>
                    id === item._id ? { ...item, quantity: item.quantity - (item.quantity > 1000 ? 1000 : 0) } : item
                ))
            totalPrice(cart)

        }
        catch (error) {
            console.log(error)
        }

    }
    const handleIncrement = async (id) => {
        try {
            setCart(cart =>
                cart.map((item) =>
                    id === item._id ? { ...item, quantity: item.quantity + (item.quantity < 15000 ? 1000 : 0) } : item
                ))

            totalPrice(cart)
        
        }
        catch (error) {
            console.log(error)
        }

    }

    const checkout = [
        {
            name: "Cash on delivery",
            id:1
        },
        {
            name: "Onlie Payment",
            id:2
        }
    ]
    return (
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5 pt-16 ">

            <div className="items w-full col-span-2 border border-1 rounded-md">
                <div className="bg-zinc-100">
                    <h1 className="text-black ml-2 py-2 font-semibold ">PRODUCTS</h1>


                </div>

                {cart &&
                    cart?.map(product =>
                        <SingleCart product={product}
                            removeCartItem={removeCartItem}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            key={product?._id} />)
                }
            </div>
            <div className="border border-1 rounded-md  h-auto mb-4 ">
                <div className="text-center mt-3">
                    <h1 className="text-black">Your Cart  <Badge count={cart?.length} size="small" /></h1>
                    <h6 style={{ fontSize: "11px" }}>Start adding items to your cart</h6>

                </div>
                <div className="" >
                    <h1 className="text-sm text-black ml-2 py-3">PRICE DETAILS</h1>
                    <div className="flex flex-row justify-between border-t-2 border-t-zinc-800 px-2 py-2 text-black">
                        <h1>Price</h1><h1>BDT {wholePrice}</h1>
                    </div>
                    <div className="flex flex-row justify-between  border-b-2 px-2 pb-2 text-black font-semibold" style={{ fontSize: "13px" }} >
                        <h1>Delivery Charges</h1><span>(will be added)</span></div>
                    <div className="flex flex-row justify-between px-2 text-black">
                        <h1>Total Amount</h1><span>BDT {wholePrice}</span>
                    </div>
                </div>
                <div className="text-center py-3">
                    <h3 className=" text-orange-500  font-semibold">{user ?
                        <><span> {user?.email}

                        </span>
                            <div className="text-center py-3">
                                <div className="category flex flex-col  my-4 ">
                                    {
                                      checkout.map(c =>
                                            <Checkbox key={c?.id}
                                                className="mt-2 ml-2 font-semibold"
                                                onChange={(e) =>setOption(e.target.name==="cashOn"?true:false)
                                                }
                                                >
                                                {c?.name}

                                            </Checkbox>)
                                    }


                                </div>
                                
                                <button className="py-2 px-14 bg-orange-500 text-white font-semibold "
                                style={{ fontSize: "15px" }}
                                onClick={() => handlePayment(cart, user)}

                            >Make Payment</button>


                            </div></> :
                        <div>  <li className="flex flex-row justify-center items-center  cursor-pointer" htmlFor="registerModal" />
                            Please
                            <Link to="/login" className="mr-2 text-black my-2" >    log in</Link>
                            to checkout

                        </div>
                    }
                    </h3>


                </div>

                <div className="payment w-full h-auto  mt-4">


                </div>

            </div>

        </div>
    )
}
export default Cart
// //