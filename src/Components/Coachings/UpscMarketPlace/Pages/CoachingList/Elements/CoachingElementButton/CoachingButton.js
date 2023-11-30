import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";

import styles from "../../../../../../../styles/coachings/coachingCard.module.css"

function CoachingButton() {
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
      className="mt-8"
      style={{
        width: "100%",

        height: "50px",

        gap: "20px",
        display: "flex",
        justifyContent: navscreenWidth > 800 ? "flex-end" : "center",
      }}
    >
      {navscreenWidth > 800 && (
        <button className={styles["coaching-list-btn"]}>
          <KeyboardArrowUpIcon />
        </button>
      )}
      {navscreenWidth > 800 && (
        <button className={styles["coaching-list-btn"]}>
          <KeyboardArrowDownIcon />
        </button>
      )}
      <button className={styles["coaching-list-btn"]}>See All</button>
    </div>
  );
}

export default CoachingButton;
