import React from "react";
import "./CuratedCollection.css";
import preLaunch from "../assets/Pre Launch.jpg";
import readyToMove from "../assets/02 (1).jpg";
import natureHomes from "../assets/03 (2).jpg";
import underConstruction from "../assets/04 (2).jpg";
import luxuryHomes from "../assets/01(1).jpg";

const CuratedCollection = () => {
  return (
    <div className="curated-cont">
      <div>
        <h2 className="text-center p-4">Curated Collection</h2>
      </div>
      <div className="d-flex curated-img-cont">
        <div className="pre-launch-img-cont p-2">
          <img src={preLaunch} alt="" className="w-100 h-100 border-radius-4" />
        </div>
        <div className="d-flex flex-column gap-20 justify-content-center p-2">
          <div className="d-flex gap-20">
            <div className="sub-img-cont">
              <img src={readyToMove} alt="" className="w-100 h-100 border-radius-4" />
            </div>
            <div className="sub-img-cont">
              <img src={natureHomes} alt="" className="w-100 h-100 border-radius-4" />
            </div>
          </div>
          <div className="d-flex gap-20">
            <div className="sub-img-cont">
              <img src={underConstruction} alt="" className="w-100 h-100 border-radius-4" />
            </div>
            <div className="sub-img-cont">
              <img src={luxuryHomes} alt="" className="w-100 h-100 border-radius-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedCollection;
