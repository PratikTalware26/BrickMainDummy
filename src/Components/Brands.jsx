import React, { useRef, useState, useEffect } from "react";
import "./Brands.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"
import client8 from "../assets/client8.png"
import client9 from "../assets/client9.png"
import client10 from "../assets/client10.png"
import client11 from "../assets/client11.png"
import client12 from "../assets/client12.png"
import client13 from "../assets/client13.png"
import client14 from "../assets/client14.png"
import client15 from "../assets/client15.png"
import client16 from "../assets/client16.png"
import client17 from "../assets/client17.png"


// import required modules
import { Pagination, Autoplay } from "swiper";

const Brands = () => {

    const [windowWidth, setWindowWidth]= useState(window.innerWidth)
    const [slideView, setSlideView]= useState(5)
    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    useEffect(()=>{
        if(windowWidth<640){
            setSlideView(2)
        }else if(windowWidth<800){
            setSlideView(3)
        }else if(windowWidth<1040){
            setSlideView(4)
        }else{
            setSlideView(5)
        }
    }, [windowWidth])

  return (
    <div>
        <div><h2 className="text-center pt-3">Brands We Work With</h2></div>
        <div>
        <Swiper
        slidesPerView={slideView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay:2000,
        }}
        className="mySwiper brand-slider"
      >
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client1} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client2} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client3} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client4} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client5} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client6} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client7} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client8} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client9} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client10} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client11} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client12} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client13} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client14} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client15} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client16} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-img-cont">
                <img src={client17} alt="" className="w-100"/>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Brands