import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [homeTrans, setHometrans] = useState("");
  useEffect(() => {
    const homeSection = document.querySelector(".home-cont");
    const options = {
    //   rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHometrans("home-cont-trans");
        } else {
          setHometrans("");
        }
      });
    }, options);

    observer.observe(homeSection);

    return () => {
      observer.unobserve(homeSection);
    };
  }, []);
  return (
    <div className="home-cont-parent">
      <div
        className={`d-flex flex-column align-items-center home-cont ${homeTrans}`}
      >
        <div>
          <h1 className="display-4 main-head">
            <b>BRICKFOLIO</b> - A LOCAL EXPERT
          </h1>
        </div>
        <div className="d-flex flex-column home-btn-opts-cont">
          <div className="d-flex justify-content-center home-btn-opts">
            <div>
              <button className="home-btns">Investment</button>
            </div>
            <div>
              <button className="home-btns">Commercial</button>
            </div>
            <div>
              <button className="home-btns">Resindential</button>
            </div>
            <div>
              <button className="home-btns">Managed Offices</button>
            </div>
          </div>
          <div className="d-flex home-search-opt-cont">
            <div className="select-opt-cont">
              <div>
                <select
                  name=""
                  id=""
                  placeholder="Select Area"
                  className="home-select"
                >
                  <option>Ajantha Nagar</option>
                  <option>Akurdi</option>
                  <option>Ambegaon Budruk</option>
                </select>
              </div>

              <div>
                <select
                  name=""
                  id=""
                  placeholder="Select Area"
                  className="home-select"
                >
                  <option>Ajantha Nagar</option>
                  <option>Akurdi</option>
                  <option>Ambegaon Budruk</option>
                </select>
              </div>

              <div>
                <select
                  name=""
                  id=""
                  placeholder="Select Area"
                  className="home-select"
                >
                  <option>Ajantha Nagar</option>
                  <option>Akurdi</option>
                  <option>Ambegaon Budruk</option>
                </select>
              </div>

              <div>
                <button className="home-search-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div>
              <button className="home-btns">Post Your Property</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
