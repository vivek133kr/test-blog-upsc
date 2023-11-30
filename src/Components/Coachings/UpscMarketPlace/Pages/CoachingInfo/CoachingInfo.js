import React from 'react'
import FirstComponent from './Elements/FirstComponent'
import MenuComponent from './Elements/MenuComponent';
import FacultyComponent from './Elements/FacultyComponent';

import Carousel from './Elements/CarouselComponent';
import CoursesComponent from './Elements/CoursesComponent';
import FeaturingComponent from './Elements/FeaturingComponent';
import ReviewComponent from './Elements/ReviewComponent';
import FeesComponent from './Elements/FeesComponent';
import FaqComponent from './Elements/FaqComponent';

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MyCarousel from './Elements/CompCarousel';
import MyMultiComponentCarousel from './Elements/CompCarousel';
import SimpleCarousel from './Elements/CompCarousel';
function CoachingInfo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div
        style={{
          width: "100vw",
       
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FirstComponent />
        <MenuComponent />

        <FacultyComponent />

        <Carousel />

        <CoursesComponent />

        <FeaturingComponent />

        <ReviewComponent />

        <FeesComponent />

        <FaqComponent />

      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
          backgroundColor: "#EC850F",
          color: "#fff",
          borderRadius: "50%",
          padding: "10px",

          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}

export default CoachingInfo