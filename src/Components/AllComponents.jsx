import React, { useEffect, useRef } from "react";
import ResidentialProperties from "./ResidentialProperties";
import Navbar from "./Navbar";
import Home from "./Home";
import homeBuyerImg from "../assets/brickf strip1.png";
import CuratedCollection from "./CuratedCollection";
import InvestmentProperty from "./InvestmentProperty";
import Brands from "./Brands";
import Footer from "./Footer";
import "./AllComponents.css";

const AllComponents = () => {
  useEffect(() => {
    const animatedComponents = Array.from(
      document.querySelectorAll(".animated-component")
    );
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Adjust the threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    animatedComponents.forEach((component) => {
      observer.observe(component);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="nav-home-cont">
      <Navbar />
      <Home />

      <div className="animated-component">
        <ResidentialProperties />
      </div>

      <div className="animated-component">
        <div className="home-buyer-img">
          <img src={homeBuyerImg} alt="" className="w-100 h-100" />
        </div>
      </div>

      <div className="animated-component">
        <CuratedCollection />
      </div>

      <div className="animated-component">
        <InvestmentProperty />
      </div>

      <div className="animated-component">
        <Brands />
      </div>

      <div className="animated-component">
        <Footer />
      </div>
    </div>
  );
};

export default AllComponents;
