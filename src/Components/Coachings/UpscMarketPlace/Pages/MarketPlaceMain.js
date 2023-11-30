// MarketPlaceMain.js

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CoachingList from "./CoachingList/CoachingList";
import CoachingInfo from "./CoachingInfo/CoachingInfo";
import UpscMarketPlaceNavbar from "./UpscMarketPlaceNavbar";
import UpscMarketPlaceFooter from "./UpscMarketPlaceFooter";

function MarketPlaceMain() {

  // useEffect(()=>{


  //   document.body.style.width = "100vw"
  //   document.body.style.border = "1px solid red"
  // }, [])
  return (
    <div>
    <UpscMarketPlaceNavbar/>
      <Routes>
        {/* Route for "/" */}
        <Route path="/" element={<CoachingList/>} />

        {/* Route for "/info" */}
        <Route path="/info" element={<CoachingInfo/>} />
      </Routes>
      <UpscMarketPlaceFooter/>
    </div>
  );
}

export default MarketPlaceMain;
