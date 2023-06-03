import React from "react";
import "./Footer.css";
import mainLogo from "../assets/brickFMainLogo.png";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="d-flex justify-content-between p-5 f-row1-cont">
        <div>
          <h3 className="fw-light">
            89% of customers<br></br>
            <span className="fw-normal">recommend us</span>
          </h3>
        </div>
        <div>
          <p className="px-3 f-row1-p">
            If you are looking for dream home!<br></br>
            If you want to sale your property!
          </p>
        </div>
        <div>
          <p className="px-3 f-row1-p">
            If you are looking for investment!<br></br>
            If you are looking for office!
          </p>
        </div>
        <div>
          <button className="btn f-row1-btn">
            Get Started
            <i className="fa fa-long-arrow-right m-1" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="f-follow-us">
        <div>
          <h3 className="fw-light">Follow us on Social Media</h3>
        </div>

        <div className="d-flex f-social-cont">
        <div className="border border-1 border-solid p-1 px-3">
          <i className="bx bxl-linkedin aos-animate"></i>
          <span className="d-block">LinkedIn</span>
        </div>
        <div className="border border-1 border-solid p-1 px-3">
          <i className="bx bxl-facebook aos-init aos-animate"></i>
          <span className="d-block">Facebook</span>
        </div>
        <div className="border border-1 border-solid p-1 px-3">
          <i className="bx bxl-youtube aos-init aos-animate"></i>
          <span className="d-block">Youtube</span>
        </div>
        <div className="border border-1 border-solid p-1 px-3">
          <i className="bx bxl-twitter aos-init aos-animate"></i>
          <span className="d-block">Twitter</span>
        </div>
        <div className="border border-1 border-solid p-1 px-3">
          <i className="bx bxl-instagram-alt aos-init aos-animate"></i>
          <span className="d-block">Instagram</span>
        </div>
        </div>
      </div>

      <div className="f-row-3">
        <div>
          <img src={mainLogo} alt="" className="mainLogo" />
        </div>
        <div>
          <h3>Need help getting started?</h3>
          <p>Schedule a call with our investment advisor today</p>
        </div>
        <div>
          <button className="btn schedual-call-btn">
            <i className="bx bxs-phone-call m-1"></i>
            Schedule Call
          </button>
        </div>
      </div>

      <div className="text-center p-4">
        <div className="py-2">
          © 2021 Copyright Brickfolio Pvt. Ltd.. All Rights Reserved.
        </div>
        <div>
          <span className="f-social-bottom">
            <i className="bx bxl-twitter"></i>
          </span>
          <span className="mx-2 f-social-bottom">
            <i className="bx bxl-facebook"></i>
          </span>
          <span>
            <i className="bx bxl-linkedin f-social-bottom"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
