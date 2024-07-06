import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../../../Home/Home/News/NewsLetter";
import {FaFacebookSquare,FaTwitter,FaLinkedinIn} from "react-icons/fa";
import {TfiYoutube} from "react-icons/tfi"
import bkash from "../../../../assetes/bikah.png"
import nagad from "../../../../assetes/nagad.png"
import rocket from "../../../../assetes/rocket.png"
import upay from "../../../../assetes/upay.jpg"
import ssl2 from "../../../../assetes/ssl-2.png"
const Footer = () => {

    return (
        <div className="w-full lg:h-[70vh] text-white flex flex-col justify-end bg-zinc-950 relative mt-12 lg:mt-10" style={{ fontSize: "14px" }}>
            <NewsLetter></NewsLetter>

            <div className="flex lg:flex-row lg:justify-around  lg:items-end flex-col justify-around items-start lg:pb-5 px-4 w-[99%] mx-full mt-32 ">
                <div className="firts-f-section text-start leading-10 text-gray-300">

                    <h2 className="text-2xl font-bold font-sans text-white">CONTACT INFOMATION</h2>
                    <p>Call Us 24/7 Free</p>
                    <h2 className="text-2xl text-extrabold text-orange-600 " >+88 01632-846454</h2>
                    <h2 className="text-2xl text-extrabold   text-orange-600" >+88 01846-579945</h2>
                    <h2 >Adress: Powro bazar,Maijdee Noakhali</h2>
                    <h2 >Email: fishnfry784@gmail.com</h2>
                    <div className="text-white flex flex-row justify-around items-start  w-[90%] text-xl my-2">
                       <a href="https://web.facebook.com/profile.php?id=61560239125347"> <FaFacebookSquare  /></a>
                        <FaTwitter />
                        <FaLinkedinIn />
                        <TfiYoutube />
                    </div>

                </div>
                {/* end first-sectiojn:- */}
                <div className="second-f-section text-gray-300">
                    <h1 className="text-xl font-semibold text-white">Information</h1>
                    <div className="list-none text-start leading-8">
                        <li>Delevary</li>
                        <li>About US</li>
                      <Link to="/contact"><li>Contact US</li></Link>
                        <li>Stores</li>
                        <li>Secure Payment</li>
                    </div>

                </div>
                {/* end second-sectiojn:- */}
                <div className="third-f-section text-gray-300">
                    <h1 className="text-xl font-semibold text-white">Custom Links</h1>
                    <div className="text-start list-none leading-8">


                        <Link to="/wishlist"><li className="hover:text-red-600">Wishlist</li> </Link>
                        <Link to="/cart"><li className="hover:text-red-600">My Cart</li> </Link>


                        <Link to="/shop"><li className="hover:text-red-600">Shop</li></Link>
                        <Link to="/blog"><li className="hover:text-red-600">Blog</li></Link>
                        <Link to="/contact"><li className="hover:text-red-600">Contact Us</li></Link>
                    </div>


                </div>


                <div className="third-f-section lg:mt-0 mt-2">
                    <h1 className="text-xl font-semibold lg:text-center text-start ">Our Location</h1>
                    <img src="https://i.ibb.co/c8tV7Kt/location.webp" className="h-[170px] w-auto py-2"></img>


                </div>



            </div>

            <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end 
            items-start py-5 px-5 bg-zinc-800 mb-16 lg:mb-0">
                <div className="flex flex-col ">
                <h2 className="lg:mb-0 mb-2">©copyrigth by <span className=" text-orange-600 " > FISHnFRY</span> , 2024</h2>
                <h2 className="">Made By <span className=" text-orange-600 " > Omar</span> </h2>
                </div>
                
                <div className="flex flex-row lg:w-1/3 w-full ">
                    <img src={bkash} className="w-[80px] h-[30px] bg-white p-1 "></img>
                    <img src={nagad} className="w-[80px]  h-[30px] mx-3"></img>
                    <img src={rocket} className="w-[80px]  h-[30px]"></img>
                    <img src={upay} className="w-[80px]  h-[30px] mx-3"></img>
                    <img src={ssl2} className="w-[80px]  h-[30px] mx-3"></img>
                </div>
            </div>
        </div>
    )


}
export default Footer