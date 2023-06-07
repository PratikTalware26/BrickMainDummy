import React, { useState } from "react";
import "./ReferPage.css";
import Navbar from "./Navbar";
import brickMain from "../assets/brickMainLogo.jpeg";
import cardIcon1 from "../assets/cardIcon1.png";
import cardIcon2 from "../assets/cardIcon2.png";
import cardIcon3 from "../assets/cardIcon3.png";
import Footer from "./Footer";

const ReferPage = () => {
  const [data, setData] = useState({
    referer_name: "",
    referer_phone: "",
    referee_name: "",
    referee_phone: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const fetchData = async () => {
        await fetch("http://localhost/referal-api/referApi.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.ok) {
              alert("Thank you! Details Received! Our Sales team will soon get in touch!");
              setData({
                referer_name: "",
                referer_phone: "",
                referee_name: "",
                referee_phone: "",
              });
            } else {
              throw new Error("Failed to submit form");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="p-5 refer-row-1 d-flex align-items-center">
        <div>
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
      </div>

      <div className="refer-steps">
        <div>
        <div>
          <h1 className="display-4 text-center refer-head">
            3 - Steps To Follow
          </h1>
        </div>
        <div className="d-flex refer-steps-cards-cont">
          <div className="card text-center">
            <h3 className="refer-steps-cards-desc">#01</h3>
            <div>
              <img src={cardIcon1} alt="stepImgIcon1" className="cardStepImg" />
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Find</span> someone you
              know who is looking to buy a home
            </h3>
          </div>
          <div className="card text-center">
            <h3 className="refer-steps-cards-desc">#02</h3>
            <div>
              <img src={cardIcon2} alt="stepImgIcon1" className="cardStepImg" />
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Fill out the form</span>{" "}
              given below with your and referral details
            </h3>
          </div>
          <div className="card text-center">
            <h3 className="refer-steps-cards-desc">#03</h3>
            <div>
              <img src={cardIcon3} alt="stepImgIcon1" className="cardStepImg" />
            </div>
            <h3>
              <span className="refer-steps-cards-desc">Earn 1% Amount</span>{" "}
              when your referrals complete a qualifying purchase
            </h3>
          </div>
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
                <img src={brickMain} alt="" className="refer-brick-logo" />
              </div>
              <div>
                <span>
                  <a
                    href="https://www.instagram.com/brickfolio/"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram-alt aos-init aos-animate text-shadow"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/BrickFolio/"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook aos-init aos-animate text-shadow"></i>
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/BrickFoliodotin" target="_blank">
                    <i className="bx bxl-twitter aos-init aos-animate text-shadow"></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="refer-form-rightside">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">
                      Your Name
                    </label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input
                      type="text"
                      className="w-100"
                      name="referer_name"
                      value={data.referer_name}
                      pattern="[A-Za-z\s]+"
                      title="Please enter a valid name (only letters and spaces allowed)."
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">
                      Referral Name
                    </label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input
                      type="text"
                      className="w-100"
                      name="referee_name"
                      value={data.referee_name}
                      pattern="[A-Za-z\s]+"
                      title="Please enter a valid name (only letters and spaces allowed)."
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">
                      Your Contact No
                    </label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input
                      type="text"
                      className="w-100"
                      name="referer_phone"
                      value={data.referer_phone}
                      maxLength="12"
                      minLength="10"
                      pattern="[0-9]+"
                      title="Please enter a valid number (only numbers allowed)."
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-3 refer-form-input-bottom align-items-center">
                  <div>
                    <label htmlFor="" className="fw-bold form-label">
                      Referral Contact No
                    </label>
                  </div>
                  <div className="refer-form-input-cont">
                    <input
                      type="text"
                      className="w-100"
                      name="referee_phone"
                      value={data.referee_phone}
                      maxLength="12"
                      minLength="10"
                      pattern="[0-9]+"
                      title="Please enter a valid number (only numbers allowed)."
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="text-center pt-2">
                  <button className="refer-sub-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReferPage;
