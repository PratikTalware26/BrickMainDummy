import React, { useEffect, useState } from "react";
import "./Navbar.css";
import mainLogo from "../assets/brickFMainLogo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navAnim, setNavanim]=useState("")

  const location = useLocation(); // React Router's useLocation hook

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

  const handleNav = (page) => {
    setShowNav(false);
  };
  
  return (
    <div className="nav-cont">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={mainLogo} alt="" className="mainLogo" />
          </Link>
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
            } ${navAnim}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav" onClick={handleNav}>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === "/investments" ? "active" : ""
                }`}
              >
                Investments
              </Link>
              <Link to="/referandearn" className={`nav-link ${location.pathname==="/referandearn" ? "active":""}`}>
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
