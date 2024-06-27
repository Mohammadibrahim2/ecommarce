import React from "react";
import { useState } from "react";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannar1 from "../../../../assetes/heaphone-1000.jpg"
import bannar2 from "../../../../assetes/bannar-1000.jpg"
// import "./BannarItem.css";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import "../../../../App.css"
const CaroselBannarItem = () => {



    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className="border rounded-full px-2 py-2   right-4 bg-zinc-400"
                style={{ position: "absolute", top: "50%", display: "block", padding: "2px ", color: "#000000", fontSize: "7px", }}
                onClick={onClick}
            >
                <span className="text-2xl "><IoIosArrowForward /></span></div>
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className="border rounded-full px-2 py-2  left-3 bg-zinc-400"
                style={{ zIndex: 1, position: "absolute", top: "50%", display: "block",  padding: "2px", color: "#000000", fontSize: "7px",  }}
                onClick={onClick}
            ><span className="text-2xl rounded-full"><IoIosArrowBack /></span></div>
        );
    }




    


    const slides = [
        {
            id: 1,
            img:bannar2,
            position: "back",
            backgroundd:"bg-zinc-900",
            textx:"text-white"
        },
        {
            id: 1,
            img: bannar1,
            position: "front"
        },
     
       
        {
            id: 1,
            img: bannar2,
            position: "bottom"
        }
    ]


    const settings = {
        // dots: true,
        //    fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (

        <div className=" w-full  h-auto   ">




            <Slider {...settings} className="w-full h-full  " >



                {
                    slides.map(slide =>
                        <div className={`flex flex-row  h-full text-black `}>

                            <div className="flex flex-row   h-full">
{/* 
                                <div className={`text-start lg:w-1/2 w-1/2  ${slide.textx} `}>
                                    <h2 className="text-sm">Electronic Offer sale</h2>
                                <div className="headText">

                              
                                    <h1 className="font-bold  lg:text-3xl text-sm">UP TO 20% OFF <br /> ON THESE PRODUCTS</h1>
                                    <p  className="my-3 lg:text-xl text-sm">
                                       </p>
                                        </div>
                                    <Link to="/shop"><button className="py-1 px-2 lg:text-xl text-sm " style={{ backgroundColor: " #ed1d24", color: "white"}}> Shop Now</button></Link>
                                    </div>  */}

                                <div className="w-full  h-full ">
                                    <img src={slide.img} className=""></img>
                                </div>


                            </div>


                        </div>




                    )
                }


            </Slider>






        </div>




    )


}
export default CaroselBannarItem

{/* <h2 className="">Electronic Offer sale</h2>
<h1 style={{fontSize:"18px"}} className="font-bold headText">UP TO 20% OFF <br/> OLED TV</h1>
<p style={{fontSize:"12px"}} className="my-3"> 
   Suscipit, aut sequi qui 
 iure quam voluptates asperiores illum iusto ?</p>
 <p>{slide.position}</p>
    <button className="py-1 px-2" style={{backgroundColor:" #ed1d24",color:"white",fontSize:"13px"}}> Shop Now</button> */}

