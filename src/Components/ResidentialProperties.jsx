import React, { useState, useEffect } from "react";
import parkImg from "../assets/central-park.png";
import "./Residential.css";
import vtpPeg from "../assets/vtp-peg.jpeg";
import earthGlobe from "../assets/earth-globe.png";
import process from "../assets/process.png";
import property from "../assets/property (1).png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ResidentialProperties = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slides, setSlides]= useState(4)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(()=>{
    if (windowWidth < 950) {
        setSlides(1);
      } else if (windowWidth < 1031) {
        setSlides(2);
      } else if (windowWidth < 1398) {
        setSlides(3);
      } else {
        setSlides(4);
      }
  }, [windowWidth])

  return (
    <div className="res-cont-parent">
      <div>
        <h2 className="text-center p-4">Residential Properties</h2>
      </div>
      <div className="res-cont">
        <div className="res-leftside">
          <div className="mb-2 mt-2">
            <img src={parkImg} alt="" className="park-img" />
          </div>
          <div>
            <h4 className="mb-3">Best Sellers in Pune</h4>
          </div>
          <div>
            <p>
              The latest residential offerings from the best builders in Pune,
              handpicked by our team of experts just for you and backed by our
              widely acclaimed transaction and financial services.
            </p>
          </div>
          <div>
            <button className="res-view-btn">View All</button>
          </div>
        </div>

        <div className="res-rightside">
          <Swiper
            slidesPerView={slides}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <div>
                  <img src={vtpPeg} alt="" className="w-100" />
                  <span className="pre-launch">Pre Launch</span>
                </div>
                <div className="card-desc">
                  <div>
                    <h4>VTP Pegasus</h4>
                  </div>
                  <div>
                    <i class="fa fa-building" aria-hidden="true"></i> VTP Realty
                  </div>
                  <div className="mt-1">
                    <i class="fa  fa-map-marker" aria-hidden="true"></i>{" "}
                    Kharadi, Pune
                  </div>
                  <div className="mt-1">
                    <i class="fa fa-cogs" aria-hidden="true"></i> 1 BHK | 428 -
                    447 SQ.FT.
                  </div>
                  <div className="mt-1">
                    <span>₹60 Lacs</span>
                    <button className="res-knowmore-btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div>
                  <img src={vtpPeg} alt="" className="w-100" />
                  <span className="pre-launch">Pre Launch</span>
                </div>
                <div className="card-desc">
                  <div>
                    <h4>VTP Pegasus</h4>
                  </div>
                  <div>
                    <i class="fa fa-building" aria-hidden="true"></i> VTP Realty
                  </div>
                  <div className="mt-1">
                    <i class="fa  fa-map-marker" aria-hidden="true"></i>{" "}
                    Kharadi, Pune
                  </div>
                  <div className="mt-1">
                    <i class="fa fa-cogs" aria-hidden="true"></i> 1 BHK | 428 -
                    447 SQ.FT.
                  </div>
                  <div className="mt-1">
                    <span>₹60 Lacs</span>
                    <button className="res-knowmore-btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div>
                  <img src={vtpPeg} alt="" className="w-100" />
                  <span className="pre-launch">Pre Launch</span>
                </div>
                <div className="card-desc">
                  <div>
                    <h4>VTP Pegasus</h4>
                  </div>
                  <div>
                    <i class="fa fa-building" aria-hidden="true"></i> VTP Realty
                  </div>
                  <div className="mt-1">
                    <i class="fa  fa-map-marker" aria-hidden="true"></i>{" "}
                    Kharadi, Pune
                  </div>
                  <div className="mt-1">
                    <i class="fa fa-cogs" aria-hidden="true"></i> 1 BHK | 428 -
                    447 SQ.FT.
                  </div>
                  <div className="mt-1">
                    <span>₹60 Lacs</span>
                    <button className="res-knowmore-btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div>
                  <img src={vtpPeg} alt="" className="w-100" />
                  <span className="pre-launch">Pre Launch</span>
                </div>
                <div className="card-desc">
                  <div>
                    <h4>VTP Pegasus</h4>
                  </div>
                  <div>
                    <i class="fa fa-building" aria-hidden="true"></i> VTP Realty
                  </div>
                  <div className="mt-1">
                    <i class="fa  fa-map-marker" aria-hidden="true"></i>{" "}
                    Kharadi, Pune
                  </div>
                  <div className="mt-1">
                    <i class="fa fa-cogs" aria-hidden="true"></i> 1 BHK | 428 -
                    447 SQ.FT.
                  </div>
                  <div className="mt-1">
                    <span>₹60 Lacs</span>
                    <button className="res-knowmore-btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="p-3 pt-4 pb-4">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <div className="home-three-icons text-center">
              <img src={earthGlobe} className="img-fluid" />
              <h4 className="mt-2">Search Property from Anywhere</h4>
              <p>
                Over 1 Lakh+ properties for sale available on the website, we
                can match you with a property that you will want to own.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="home-three-icons text-center">
              <img src={process} className="img-fluid" />
              <h4 className="mt-2">Guidance at every step</h4>
              <p>
                Our Professional & Friendly Property Experts are ready to guide
                and help you with an essential selection of those properties
                that meet the client’s needs saving the customer’s time.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="home-three-icons text-center">
              <img src={property} className="img-fluid" />
              <h4 className="mt-2">Helping you find the right property</h4>
              <p>
                We ensure that our Property Experts know best how to satisfy
                client needs as the local expert in their respective markets and
                determine the best fit property for you.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="browse-btn mt-4 mb-4">Browse Home</button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialProperties;
