import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

function FacultyDetailButton({ prev, next }) {
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
      className="mt-8 mb-8"
      style={{
        width: "100%",

        height: "50px",

        gap: "20px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {navscreenWidth > 800 && (
        <button className={"ch-list-btn"} onClick={prev}>
          <KeyboardArrowLeftIcon />
        </button>
      )}
      {navscreenWidth > 800 && (
        <button className={"ch-list-btn"} onClick={next}>
          <KeyboardArrowRightIcon />
        </button>
      )}
      <button
        style={{
          width: navscreenWidth < 800 && "100%",
        }}
        className={"ch-list-btn"}
      >
        See All
      </button>
    </div>
  );
}

export default FacultyDetailButton;
