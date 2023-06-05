import React from "react";
import "./ReferPage.css";
import Navbar from "./Navbar";
import brickMain from "../assets/brickMainLogo.jpeg"
import cardIcon1 from "../assets/cardIcon1.png"
import cardIcon2 from "../assets/cardIcon2.png"
import cardIcon3 from "../assets/cardIcon3.png"
import Footer from "./Footer";

const ReferPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 refer-row-1">
        <div>
          <h1 className="display-2 refer-head">
            Brickfolio's Referral Program
          </h1>
        </div>
        <div>
          <h1 className="py-3 display-4 refer-head-2">
            Talking about us can<br></br>
            be really rewarding
          </h1>
        </div>
        <div>
          <h4 className="pt-5 refer-head-2">
            Refer a friend and get a chance to reduce the cost of your home.
            Bring your friends & family closer to you by referring them & enjoy
            1% referral benefits credited to your account
          </h4>
        </div>
      </div>

      <div className="refer-steps">
        <div>
          <h1 className="display-4 text-center refer-head">
            3 - Steps To Follow
          </h1>
        </div>
        <div className="d-flex p-3 py-5 refer-steps-cards-cont">
          <div className="card p-3 text-center">
            <h3 className="refer-steps-cards-desc">#01</h3>
            <div>
              <img src={cardIcon1} alt="stepImgIcon1" className="w-100 h-100"/>
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Find</span> someone you
              know who is looking to buy a home
            </h3>
          </div>
          <div className="card p-3 text-center">
            <h3 className="refer-steps-cards-desc">#02</h3>
            <div>
              <img src={cardIcon2} alt="stepImgIcon1" className="w-100 h-100"/>
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Fill out the form</span>{" "}
              given below with your and referral details
            </h3>
          </div>
          <div className="card p-3 text-center">
            <h3 className="refer-steps-cards-desc">#03</h3>
            <div>
              <img src={cardIcon3} alt="stepImgIcon1" className="w-100 h-100"/>
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Earn 1% Amount</span>{" "}
              when your referrals complete a qualifying purchase
            </h3>
          </div>
        </div>
      </div>

      <div className="refer-row-3">
        <div className="w-100 refer-form-cont">
          <h2 className="display-5 text-center refer-head-2">Referral Form</h2>
          <div className="d-flex justify-content-between refer-row3-form-cont">
            <div className="refer-form-leftside">
              <p className="refer-brick-addr fw-bold form-label">
                Brickfolio Pvt Ltd, B3, Cereberum IT Park, Kalyani Nagar, Pune
              </p>
              <div>
                <img src={brickMain} alt="" className="refer-brick-logo"/>
              </div>
              <div>
                <span>
                  <i className="bx bxl-instagram-alt aos-init aos-animate"></i>
                </span>
                <span>
                  <i className="bx bxl-facebook aos-init aos-animate"></i>
                </span>
                <span>
                  <i className="bx bxl-twitter aos-init aos-animate"></i>
                </span>
              </div>
            </div>

            <div className="refer-form-rightside">
              <form action="">
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">Your Name</label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input type="text" className="w-100" />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">Referral Name</label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input type="text" className="w-100" />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">Your Contact No</label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input type="text" className="w-100" />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">Referral Contact No</label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input type="text" className="w-100" />
                  </div>
                </div>
                <div className="text-center pt-2">
                  <button className="refer-sub-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ReferPage;
