import React, { useEffect, useRef, useState } from "react";
import "./InvestmentProperty.css"
import investImg from "../assets/InvestImg.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const InvestmentProperty = () => {
    const [windowWidth, setWindowWidth]= useState(window.innerWidth)
    const [slideView, setSlideView]= useState(3)
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
        if(windowWidth<800){
            setSlideView(1)
        }else if(windowWidth<1250){
            setSlideView(2)
        }else{
            setSlideView(3)
        }
    }, [windowWidth])

  return (
    <div className="invest-cont">
        <div><h2 className="text-center p-4">Investment Property</h2></div>
        <div className="pb-4 invest-slider-cont">
        <Swiper
        slidesPerView={slideView}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper investSwipermain"
      >
        <SwiperSlide>
            <div className="card p-3 invest-card">
                <div><img src={investImg} alt="" className="w-100"/></div>
                <div className="pt-2">
                    <h4>
                        <span className="retail">Retail</span>
                        <span className="invest-addr"><i className="fa fa-map-marker m-1" aria-hidden="true"></i>Pune-Solapur Road</span>
                    </h4>
                </div>
                <div className="d-flex justify-content-between pt-2 pb-2">
                    <div>
                        <span>5.05%</span><br></br>
                        <span className="units">ROI</span>
                    </div>
                    <div>
                        <span>1122</span><br></br>
                        <span className="units">Sq.ft.</span>
                    </div>
                    <div>
                    <span>5</span><br></br>
                    <span className="units">Years</span>
                    </div>
                </div>
                <div className="text-center">
                    <button className="invest-btn mt-2">Know More</button>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card p-3 invest-card">
                <div><img src={investImg} alt="" className="w-100"/></div>
                <div className="pt-2">
                    <h4>
                        <span className="retail">Retail</span>
                        <span className="invest-addr"><i className="fa fa-map-marker m-1" aria-hidden="true"></i>Pune-Solapur Road</span>
                    </h4>
                </div>
                <div className="d-flex justify-content-between pt-2 pb-2">
                    <div>
                        <span>5.05%</span><br></br>
                        <span className="units">ROI</span>
                    </div>
                    <div>
                        <span>1122</span><br></br>
                        <span className="units">Sq.ft.</span>
                    </div>
                    <div>
                    <span>5</span><br></br>
                    <span className="units">Years</span>
                    </div>
                </div>
                <div className="text-center">
                    <button className="invest-btn mt-2">Know More</button>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card p-3 invest-card">
                <div><img src={investImg} alt="" className="w-100"/></div>
                <div className="pt-2">
                    <h4>
                        <span className="retail">Retail</span>
                        <span className="invest-addr"><i className="fa fa-map-marker m-1" aria-hidden="true"></i>Pune-Solapur Road</span>
                    </h4>
                </div>
                <div className="d-flex justify-content-between pt-2 pb-2">
                    <div>
                        <span>5.05%</span><br></br>
                        <span className="units">ROI</span>
                    </div>
                    <div>
                        <span>1122</span><br></br>
                        <span className="units">Sq.ft.</span>
                    </div>
                    <div>
                    <span>5</span><br></br>
                    <span className="units">Years</span>
                    </div>
                </div>
                <div className="text-center">
                    <button className="invest-btn mt-2">Know More</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default InvestmentProperty