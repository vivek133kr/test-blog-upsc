import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import styles from "../../../../../../../styles/coachings/topperBtn.module.css"
function ToppersButton({ prev, next }) {
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
        justifyContent: navscreenWidth > 800 ? "flex-end" : "center",
      }}
    >
      {navscreenWidth > 800 && (
        <Button className={styles["topper-list-btn"]} onClick={prev}>
          <KeyboardArrowLeftIcon />
        </Button>
      )}
      {navscreenWidth > 800 && (
        <Button className={styles["topper-list-btn"]} onClick={next}>
          <KeyboardArrowRightIcon />
        </Button>
      )}
      <Button style={{
        paddingLeft:"30px",
        paddingRight:"30px",
      }} className={styles["topper-list-btn"]}>See All</Button>
    </div>
  );
}

export default ToppersButton;
