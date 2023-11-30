import React, { useState, useEffect } from "react";
import styles from "../../../../../../styles/coachings/coachingCarousel.module.css";
import CarouselCard from "./CarouselCard";
import SimpleCarousel from "./CompCarousel";

const CarouselComponent = ({ items }) => {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  return (
    <div
      id="centres"
      style={{
        marginBottom: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <div
        className="mt-10 "
        style={{
          width: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <p className={styles["carouselTitle"]}>Class Centres</p>
        </div>
        <div
          style={{
            width: "100%",

            marginTop:navscreenWidth > 800 ? "60px":"20px",
            display: "flex",
            justifyContent: "center",
          }}
          
        >
          <div
            style={{
              display: "flex",

              width: "100%",

              gap: "40px", // Adjust the gap between cards as needed
            }}
          >
            <SimpleCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
