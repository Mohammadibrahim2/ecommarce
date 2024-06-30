import React, { useContext } from 'react';
const OurMapLocation=()=> {
  return (
    <div class="mapouter contactInfo w-full h-full">
    <div class={`gmap_canvas lg:p-5 p-2  w-[95%]  mx-auto rounded-lg`}>
        <iframe className=" h-[380px] w-full mx-auto gmap_iframe rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.370433232391!2d91.09529434267913!3d22.86277048941755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a45628ee5d7d%3A0xd4138c870798969b!2sPouro%20Bazar%20Grocery%20Market!5e0!3m2!1sen!2sbd!4v1676789627668!5m2!1sen!2sbd">
    </iframe ></div>
    {/* <style>.mapouter{{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}}</style> */}
    </div>
  )
}

export default OurMapLocation