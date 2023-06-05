import React, { useEffect, useState } from "react";
import "./Navbar.css";
import mainLogo from "../assets/brickFMainLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 990) {
      setShowNav(false);
    }
  }, [windowWidth]);

  const handleNav = () => {
    setShowNav(false);
  };

  return (
    <div className="nav-cont">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="" className="mainLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={handleClick}></span>
          </button>
          <div
            className={`collapse navbar-collapse flex-row-reverse ${
              showNav ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav" onClick={handleNav}>
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Investments
              </a>
              {/* <a className="nav-link" href="#">
                Refer and Earn!
              </a> */}
              <Link to="referandearn" className="nav-link">
                Refer and Earn!
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
