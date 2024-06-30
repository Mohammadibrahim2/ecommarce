import React from 'react';
import { Carousel } from 'antd';
import bannar1 from "../../../../assetes/bannar-1000 (1).jpg"
import bannar2 from "../../../../assetes/bannar-2000.jpeg"
import bannar3 from "../../../../assetes/banner-3000.jfif"
import bannar4 from "../../../../assetes/banner-4000.jpg"
const bannar=[
    {img:bannar1},
    {img:bannar2},
    {img:bannar3},
    {img:bannar4}
]
const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'orange',
};

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

const CaroselH = () => (
    
  <Carousel autoplay>

 
        {
           bannar.map(item=><div>
                <img src={item.img}></img>
            </div>)
        }
      
 
   
  </Carousel>
);
export default CaroselH;