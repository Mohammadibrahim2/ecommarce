import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mbrands1 from "../../../../assetes/more-brands/more-b-1.png"
import Mbrands2 from "../../../../assetes/more-brands/more-b-2.png"
import Mbrands3 from "../../../../assetes/more-brands/more-b-3.png"
import Mbrands4 from "../../../../assetes/more-brands/more-b-4.png"
import Mbrands5 from "../../../../assetes/more-brands/more-b-5.png"
import Mbrands6 from "../../../../assetes/more-brands/more-b-6.png"
import Mbrands7 from "../../../../assetes/more-brands/more-b-7.png"
import Mbrands8 from "../../../../assetes/more-brands/more-b-8.png"
import Mbrands9 from "../../../../assetes/more-brands/more-b-9.png"
import Mbrands10 from "../../../../assetes/more-brands/more-b-10.png"
import Mbrands11 from "../../../../assetes/more-brands/more-b-11.png"
import Mbrands12 from "../../../../assetes/more-brands/more-b-12.png"
import Mbrands13 from "../../../../assetes/more-brands/more-b-13.png"
import Mbrands14 from "../../../../assetes/more-brands/more-b-14.png"
import Mbrands15 from "../../../../assetes/more-brands/more-b-15.png"
import Mbrands16 from "../../../../assetes/more-brands/more-b-16.png"
import Mbrands17 from "../../../../assetes/more-brands/more-b-17.png"
import Mbrands18 from "../../../../assetes/more-brands/more-b-18.png"
import Mbrands19 from "../../../../assetes/more-brands/more-b-19.png"
import Mbrands20 from "../../../../assetes/more-brands/more-b-20.png"
import Slider from "react-slick";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
const MoreBrands=()=>{

    const brands=[
        {
            id:1,
            img:Mbrands1
        },
        {
            id:1,
            img:Mbrands2 
        },
        {
            id:1,
            img:Mbrands3 
        },
        {
            id:1,
            img:Mbrands4
        },
        {
            id:1,
            img:Mbrands5
        },
        {
            id:1,
            img:Mbrands6
        },
        {
            id:1,
            img:Mbrands7
        },
        {
            id:1,
            img:Mbrands8
        },
        {
            id:1,
            img:Mbrands9 
        },
        {
            id:1,
            img:Mbrands10
        },
        {
            id:1,
            img:Mbrands11 
        },
        {
            id:1,
            img:Mbrands12 
        },
        {
            id:1,
            img:Mbrands13 
        },
        {
            id:1,
            img:Mbrands14 
        },
        {
            id:1,
            img:Mbrands15
        },
        {
            id:1,
            img:Mbrands16
        },
         {
            id:1,
            img:Mbrands17 
        },
        {
            id:1,
            img:Mbrands18 
        },
        {
            id:1,
            img:Mbrands19
        },
        {
            id:1,
            img:Mbrands20
        },
    ]

    
      const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className=" px-2 py-2   right-[-30px] "
                style={{ position: "absolute", top: "30%", display: "block", color: "#000000", fontSize: "7px", }}
                onClick={onClick}
            >
                <span className="text-2xl "><IoIosArrowForward /></span></div>
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className=" px-2 py-2  left-[-30px]"
                style={{ zIndex: 1, position: "absolute", top: "30%", display: "block",  color: "#000000", fontSize: "7px",  }}
                onClick={onClick}
            ><span className="text-2xl rounded-full"><IoIosArrowBack /></span></div>
        );
    }

    const settings = {
        // className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        
        slidesToShow: 8,
     
        // autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
       
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <div className=" lg:w-2/3 w-[95%] mx-auto my-2">
        <Slider {...settings} className=" w-auto  border-t-2 border-b-2 ">
        
            {
                brands.map(brand=>
                    <img src={brand.img} className="w-[30px] mr-3 py-0"></img>)
            }
    </Slider>
        </div>
    
    )
}
export default MoreBrands