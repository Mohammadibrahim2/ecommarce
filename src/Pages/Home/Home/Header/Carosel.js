import React from 'react';
import { Carousel } from 'antd';
import bannar1 from "../../../../assetes/heaphone-1000.jpg"
import bannar2 from "../../../../assetes/bannar-1000.jpg"
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
            slides.map(item=><div>
                <img src={item.img}></img>
            </div>)
        }
      
 
   
  </Carousel>
);
export default CaroselH;